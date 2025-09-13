// 1. 初始化DOM元素
const taskInput = document.getElementById('taskInput');
const deadlineInput = document.getElementById('deadlineInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const filterTabs = document.querySelectorAll('.tab');

// 2. 任务数据管理（本地存储）
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// 3. 渲染任务列表
function renderTasks(filter = 'all') {
    // 清空列表
    taskList.innerHTML = '';

    // 筛选任务
    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
    });

    // 生成任务项
    filteredTasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        li.setAttribute('data-index', index);

        // 格式化日期（YYYY-MM-DD → MM-DD）
        const formattedDate = task.deadline 
            ? new Date(task.deadline).toLocaleDateString('zh-CN', { month: '2-digit', day: '2-digit' })
            : '无截止日期';

        // 检查是否逾期
        const isOverdue = task.deadline && new Date(task.deadline) < new Date().setHours(0, 0, 0, 0);

        li.innerHTML = `
            <input type="checkbox" class="task-check" ${task.completed ? 'checked' : ''}>
            <div class="task-content">
                <div class="task-text" contenteditable="true">${task.text}</div>
                <div class="task-deadline ${!isOverdue && task.deadline ? 'not-due' : ''}">
                    ${task.deadline ? `截止：${formattedDate}` : '无截止日期'}
                    ${isOverdue ? '（已逾期）' : ''}
                </div>
            </div>
            <button class="delete-btn"><<i class="bi bi-trash"></</i></button>
        `;

        taskList.appendChild(li);
    });

    // 绑定任务项事件（复选框、删除、编辑）
    bindTaskEvents();

    // 保存到本地存储
    saveTasks();
}

// 4. 绑定任务项交互事件
function bindTaskEvents() {
    // 复选框切换完成状态
    document.querySelectorAll('.task-check').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const index = e.target.closest('.task-item').dataset.index;
            tasks[index].completed = checkbox.checked;
            renderTasks(getActiveFilter());
        });
    });

    // 删除任务
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = e.target.closest('.task-item').dataset.index;
            tasks.splice(index, 1);
            renderTasks(getActiveFilter());
        });
    });

    // 编辑任务文本
    document.querySelectorAll('.task-text').forEach(textEl => {
        textEl.addEventListener('blur', (e) => {
            const index = e.target.closest('.task-item').dataset.index;
            tasks[index].text = e.target.textContent.trim();
            saveTasks();
        });
    });

    // 拖拽排序（使用原生Drag API）
    const taskItems = document.querySelectorAll('.task-item');
    taskItems.forEach(item => {
        item.setAttribute('draggable', 'true');

        // 开始拖拽
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', item.dataset.index);
            item.classList.add('dragging');
        });

        // 结束拖拽
        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });

        // 拖拽经过
        item.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingItem = document.querySelector('.dragging');
            const currentItem = item;
            if (draggingItem !== currentItem) {
                const parent = taskList;
                const draggingIndex = Array.from(parent.children).indexOf(draggingItem);
                const currentIndex = Array.from(parent.children).indexOf(currentItem);
                if (draggingIndex < currentIndex) {
                    parent.insertBefore(draggingItem, currentItem.nextSibling);
                } else {
                    parent.insertBefore(draggingItem, currentItem);
                }
            }
        });

        // 放置完成（更新顺序）
        item.addEventListener('drop', (e) => {
            e.preventDefault();
            const originalIndex = e.dataTransfer.getData('text/plain');
            const newIndex = item.dataset.index;
            const [movedTask] = tasks.splice(originalIndex, 1);
            tasks.splice(newIndex, 0, movedTask);
            renderTasks(getActiveFilter());
        });
    });
}

// 5. 添加新任务
function addTask() {
    const taskText = taskInput.value.trim();
    const taskDeadline = deadlineInput.value;

    if (taskText) {
        tasks.unshift({ // 新增任务放最前面
            text: taskText,
            deadline: taskDeadline,
            completed: false
        });

        // 清空输入框
        taskInput.value = '';
        deadlineInput.value = '';

        // 重新渲染
        renderTasks(getActiveFilter());
    }
}

// 6. 获取当前激活的筛选标签
function getActiveFilter() {
    return document.querySelector('.tab.active').dataset.filter;
}

// 7. 保存任务到本地存储
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// 8. 绑定筛选标签切换事件
filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有标签的active类
        filterTabs.forEach(t => t.classList.remove('active'));
        // 给当前标签添加active类
        tab.classList.add('active');
        // 重新渲染对应筛选结果
        renderTasks(tab.dataset.filter);
    });
});

// 9. 绑定添加按钮点击事件
addBtn.addEventListener('click', addTask);

// 10. 绑定回车键添加任务
taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask();
});

// 11. 初始渲染任务列表
renderTasks();
