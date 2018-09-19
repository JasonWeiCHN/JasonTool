console.log("调试~!");
console.log(plus.io.PRIVATE_DOC);
plus.io.requestFileSystem(plus.io.PRIVATE_DOC, function(fs) {
	// 可通过fs操作PRIVATE_DOC文件系统 
	// ......
	console.log("可通过fs操作PRIVATE_DOC文件系统 ");
	console.log(fs);
	// 1 遍历查阅 fs中的具体内容
	for(var obj in fs) {
		console.log(obj);
		console.log(fs[obj]);
		//								if("root" == obj) {
		//									for(var item in fs[obj] ){
		//										console.log(item);
		//										console.log(fs[item]);
		//									}
		//								}
	}

	// 2 fs.root是根目录操作对象DirectoryEntry
	// 创建读取目录信息对象 
	var directoryReader = fs.root.createReader();
	directoryReader.readEntries(function(entries) {
		var i;
		for(i = 0; i < entries.length; i++) {
			alert(entries[i].name);
			if(entries[i].name.startsWith("复件")) {
				alert("找到了~!执行删除~");
				entries[i].remove(function() {
					alert("删除成功~!")
				}, function() {
					alert("删除失败~！")
				})
			}
		}
	}, function(e) {
		alert("Read entries failed: " + e.message);
	});

}, function(e) {
	alert("Request file system failed: " + e.message);
});