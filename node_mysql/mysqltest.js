var mysql = require('mysql');

var TEST_DATABASE = 'mhxy';
var TEST_TABLE = 'assets_overview';

//创建连接 
var client = mysql.createConnection({
	user: 'root',
	password: 'password',
});

client.connect();
client.query("use " + TEST_DATABASE);
client.query(
	'SELECT * FROM ' + TEST_TABLE,
	function selectCb(err, results, fields) {
		if (err) {
			throw err;
		}
		if (results)
		{
			for (var i = 0; i < results.length; i++)
			{
				console.log("%d\t%s\t%s", results[i].id, results[i].name, results[i].totalasset);
			}
		}
		client.end();
	}
);
