$(document).ready(function() {
  var json = {
    "questionDesc": {
      "title": "题组一",
      "headImgPc": "image/1920x216.png",
      "bgImgPc": "image/1920-back.png",
      "headImgWap": "image/750x216.png",
      "bgImgWap": "image/750-back.png"
    },
    "questionsList": [{
        "question": "但就在1953年志愿军在朝鲜签署停战的同年，西南剿匪也正式落下帷幕。西南军区在四川，贵州，云南等地共清除土匪240余万人，这种人数放在其他国家完全是一支军队，而中国的解放军正是凭着毅力将其全歼，完成了这一不可能的任务。中国自古就有绿林人士啸聚山林的故事，但建国后再无此故事，当年解放军的能力可见一斑。",
        "options": "xxxx|xxxxxxxx|xxxxxxxxxx|xxxxxx",
        "flag": 1,
        "imgUrl": "https://dummyimage.com/400x400/e3e3e3/000",
        "answer": "0"
      },
      {
        "question": "西南军区在四川，贵州，云南等地共清除土匪240余万人，这种人数放在其他国家完全是一支军队，而中国的解放军正是凭着毅力将其全歼，完成了这一不可能的任务。中国自古就有绿林人士啸聚山林的故事，但建国后再无此故事，当年解放军的能力可见一斑。",
        "options": "xxxx|xxxxxxxx|xxxxxxxxxx|xxxxxx",
        "flag": 2,
        "imgUrl": "https://dummyimage.com/400x400/e3e3e3/000|https://dummyimage.com/400x400/e3e3e3/000",
        "answer": "0|1|2"
      },
      {
        "question": "这种人数放在其他国家完全是一支军队，而中国的解放军正是凭着毅力将其全歼，完成了这一不可能的任务。中国自古就有绿林人士啸聚山林的故事，但建国后再无此故事，当年解放军的能力可见一斑。",
        "options": "正确|错误",
        "flag": 3,
        "imgUrl": "",
        "answer": "1"
      },
      {
        "question": "但就在1953年志愿军在朝鲜签署停战的同年，(______)也正式落下帷幕。",
        "options": "",
        "flag": 4,
        "imgUrl": "https://dummyimage.com/400x400/e3e3e3/000",
        "answer": "西南剿匪"
      }
    ]
  };
  var finResult = {
    resultArr:[],
    allNum : json.questionsList.length,
    trueNum : 0,
    falseNum : 0,
    startTime:0,
    endTime:0,
    useTime :0,
  };

  // 数字转换大写字母
  function getChar(i){
      if(i >= 0 && i <= 26){
          return String.fromCharCode(65 + i);
      } else {
          console.log('数字溢出范围');
      }
  }

  // 获取当前时间戳
  function getTime() {
    var nowTime = new Date().getTime();
    return nowTime;
  }

  // 构造题目
  function innerHtml(data) {
    finResult.startTime = getTime();
    var questionType;

    $(".question-box .question-tit span").css('display', 'none');
    switch (data.flag) {
      case 1:
        $(".question-box .question-tit span[name='SCQ']").css('display', 'block');
        questionType = "SCQ";
        break;
      case 2:
        $(".question-box .question-tit span[name='MCQ']").css('display', 'block');
        questionType = "MCQ";
        break;
      case 3:
        $(".question-box .question-tit span[name='TOF']").css('display', 'block');
        questionType = "TOF";
        break;
      case 4:
        $(".question-box .question-tit span[name='CLOZE']").css('display', 'block');
        questionType = "CLOZE";
        break;
      default:
        break;
    }

    var imgList = data.imgUrl.split("|");
    var optionsList = data.options.split("|");

    // 显示题目文本
    if (data.question) {
      $(".question-box  .question-text").html(data.question);
    }

    // 显示题目图片
    $(".question-box  .question-image").html("");
    for (var i = 0; i < imgList.length; i++) {
      $(".question-box  .question-image").append(
        "<img src='"+imgList[i]+"' alt=''>"
      );
    }
    // 显示题目选项
    $(".question-box  .question-options-list ul").html("");
      $(".question-box .question-answer-input").css('display', 'none');
    if (questionType != 'CLOZE') {
      if (optionsList.length>0) {
        for (var j = 0; j < optionsList.length; j++) {
          $(".question-box  .question-options-list ul").append(
            "<li data-type='"+questionType+"'>"+optionsList[j]+"</li>"
          );
        }
      }
    }else {
      $(".question-box .question-answer-input").css('display', 'block');
    }
  }

  // 题目初始化
  var index = 0;
  innerHtml(json.questionsList[index]);

  //确认题目
  $(".make-sure").click(function(event) {

    if (json.questionsList[index].flag == 4) {
      var inputValue = $(".question-answer-input input").val();
      if (inputValue.length<=0) {
        alert("请输入答案！");
      }else {
        $(".question-result").text('正确答案：'+json.questionsList[index].answer);
        $(".question-result").css('display', 'block');
        $(".make-sure").css('display', 'none');
        $(".next-btn").css('display', 'block');
      }
    }else {
      var selectedDom = $(".question-box  .question-options-list ul .selected");
      var rightKeyArr = json.questionsList[index].answer.split("|");
      if (selectedDom.length<1) {
        alert("请选择答案！");
      }else {
        var rightKeyStr="";
        for (var i = 0; i < rightKeyArr.length; i++) {
          rightKeyStr += getChar(parseInt(rightKeyArr[i]));
        }

        $(".question-result").text('正确答案：'+rightKeyStr);
        $(".question-result").css('display', 'block');
        $(".make-sure").css('display', 'none');
        $(".next-btn").css('display', 'block');
      }
    }
  });

  // 下一题
  $(".next-btn").click(function(event) {
    var userAnswerArr = [];
    var TorF = 'true';

    if (json.questionsList[index].flag == 4) {
      inputQuestion();
    }else {
      selectQuestion();
    }

    function selectQuestion() {
      var selectedDom = $(".question-box  .question-options-list ul .selected");
      var rightKeyArr = json.questionsList[index].answer.split("|");
      if (selectedDom.length<1) {
        alert("请选择答案！");
      }else {

        for (var i = 0; i < selectedDom.length; i++) {
          userAnswerArr.push($(selectedDom[i]).index()+"");
        }

        for (var j = 0; j < rightKeyArr.length; j++) {
          if (rightKeyArr[j] != userAnswerArr[j]) {
            TorF = 'false';
          }
        }

        if (TorF=='true') {
          finResult.trueNum += 1;
        }else {
          finResult.falseNum += 1;
        }

        finResult.resultArr.push({
          questionNum:index,
          userAnswerArr:userAnswerArr,
          answer:json.questionsList[index].answer.split("|"),
          TorF:TorF
        });
        nextQuestion();
      }
    }

    function inputQuestion() {
      var inputValue = $(".question-answer-input input").val();
      if (inputValue.length<=0) {
        alert("请输入答案！");
      }else {
        if (inputValue != json.questionsList[index].answer) {
          TorF = 'false';
        }

        if (TorF=='true') {
          finResult.trueNum += 1;
        }else {
          finResult.falseNum += 1;
        }

        finResult.resultArr.push({
          questionNum:index,
          userAnswerArr:inputValue,
          answer:json.questionsList[index].answer,
          TorF:TorF
        });
        nextQuestion();
      }
    }
    // 下一题
    function nextQuestion() {
      index += 1;
      $(".question-content").scrollTop(0);
      if (index < json.questionsList.length) {
        innerHtml(json.questionsList[index]);
        $(".make-sure").css('display', 'block');
        $(".question-result").css('display', 'none');
        $(".next-btn").css('display', 'none');
      }else {
        console.log(finResult);
        finResult.endTime = getTime();
        finResult.useTime = finResult.endTime - finResult.startTime;
        $(".question-box").css('display', 'none');
        $(".result .allNum").text(json.questionsList.length);
        $(".result .trueNum").text(finResult.trueNum);
        $(".result falseNum").text(finResult.falseNum);
        $(".result .lv").text(finResult.trueNum/json.questionsList.length*100+"%");
        $(".result").fadeIn();
      }
    }

  });

  // 选择选项
  $(".question-box  .question-options-list").on("click", "ul li", function(event) {
    event.preventDefault();
    switch ($(this).data('type')) {
      case 'SCQ':
        $(this).siblings().removeClass('selected');
        $(this).toggleClass('selected');
        break;
      case 'MCQ':
        $(this).toggleClass('selected');
        break;
      case 'TOF' :
        $(this).siblings().removeClass('selected');
        $(this).toggleClass('selected');
        break;
      case 'CLOZE':
        break;
      default:
    }
  });

});
