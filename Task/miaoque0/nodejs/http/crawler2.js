/**
 * Created by 26053 on 2017/5/16.
 */
var http = require('http');
var cheerio = require('cheerio');
var url = 'http://www.imooc.com/learn/348';

function filterChapters(html){
    var $ = cheerio.load(html);
    //先拿到某一大章
    var chapters = $('.chapter');
    //
    //[{
    //    chapterTitle:'',
    //    video:[
    //        title:'',
    //        id:''0
    //    ]
    //}]

    var courseData = [];
    chapters.each(function(item){
        var chapter = $(this);
        var chapterTitle = chapter.find('strong').text();
        var video = chapter.find('.video').children('li');
        var chapterData = {
            chapterTitle:chapterTitle,
            videos:[]
        };
        videos.each(function(item){
            var video = $(this).find('.studyvideo')
            var videoTitle = video.text();
            var id = video.attr('href').split('video/')[1]

            chapterData.videos.push({
                    title:videoTitle,
                    id:id
                })
        });

        courseData.push(chapterData)

    });

    return courseData;
}

function printCourseInfo(courseData){
    courseData.forEach(function(item){
        var chapterTitle = item.chapterTitle;
        console.log(chapterTitle + '\n');

        item.videos.forEach(function(item){
            console.log('['+video.id+']'+video.title+'\n')
        })
    })
}

http.get(url,function(res){
    var html='';
    res.on('data',function(data){
        html+=data;
    });
    res.on('end', function () {0
       var courseData = filterChapters(html);
        printCourseInfo(courseData)
    })
}).on('error',function(){
    console.log('获取课程数据出错')
});