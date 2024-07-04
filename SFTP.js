

const Client = require('ssh2-sftp-client');

const config = {
    host: '202.44.230.99',
    port: '9678',
    username: 'luckana',
    password: 'db\'Fdt:va9N'
};

let sftp = new Client();

sftp.connect(config)
        .then(() => sftp.fastPut('/var/lib/jenkins/workspace/Gestamp Duty/Data Files/SFTP/Auto_SFTP_C2.xlsx', '/batch_tic_th/UAT/outbound/stamp/0105556078229/Default Ginkgo/Auto_SFTP_C2.xlsx'))
        .then((res) => { console.log(res);})
        .finally(() => sftp.end())
        