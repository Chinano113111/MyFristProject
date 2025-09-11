#!/system/bin/sh
if [ -f "${0%/*/*}/tools/tools.sh" ]; then
    MODDIR="${0%/*}"
    conf_path="${0%/*/*}/restore_settings.conf"
    [ ! -f "${0%/*/*}/restore_settings.conf" ] && . "${0%/*/*}/tools/tools.sh"
else
    echo "${0%/*/*}/tools/tools.sh遗失"
fi
. "${0%/*/*}/tools/tools.sh" | tee "${0%/*}/log.txt"
