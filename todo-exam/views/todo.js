// 라우팅 핸들러 2
var fs = require('fs');
// import { exists } from 'fs';

// 1. list : ToDo 목록 불러오기
exports.list = function(res, req){
    fs.exists('./todo_list.json', function(exists){
        if(exists){
            fs.readFile('./todo_list.json', {
                'encoding' : 'utf8'
            }, function(err, list){
                // 파일 읽기
                res.json(list);
            });
        }else{
            var list = {
                // 기본 ToDo 목록 형식
                'list' : []
            };

            fs.writeFile('./todo_list.json', JSON.stringify(list), function(err){
                res.json(list);
            });
        }
    });
};