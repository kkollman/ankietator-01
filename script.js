$(function() {
    console.log('bob')

    var question = $('.question');
    var counter = 0;
    var button = $('button');
    var metrics = $('input[data-metric]');
    var submit = $('.submit');
    var showBtn = $('.show');
    var females = $('input[data-metric="female"]');
    var males = $('input[data-metric="male"]');
    var basic = $('input[data-metric="basic"]');
    var average = $('input[data-metric="average"]');
    var professional = $('input[data-metric="professional"]');
    var higher = $('input[data-metric="higher"]');
    var age15 = $('input[data-metric="15"]');
    var age19 = $('input[data-metric="19"]');
    var age31 = $('input[data-metric="31"]');
    var age51 = $('input[data-metric="51"]');
    var age61 = $('input[data-metric="61"]');
    var poznan = $('input[data-metric="poznan"]');
    var aglomeration = $('input[data-metric="aglomeration"]');
    var other = $('input[data-metric="other"]');


    var allAnswers = $('[data-answer]');

    submit.on('click', function() {
        event.preventDefault();

        var checkedAnswer = $('input:checked');

        var surveyStats = function() {
            var checkedMetrics = metrics.filter(':checked');

            for (var i = 0; i < checkedAnswer.length; i++) {
              var answerCounter = $(checkedAnswer[i]).next().find('.all');
              answerCounter.html(parseInt(answerCounter.html()) + 1);
                for (var j = 0; j < checkedMetrics.length; j++) {
                  var attribute = $(checkedMetrics[j]).data("metric");
                  if (checkedAnswer[i] != checkedMetrics[j]) {
                    if ($(checkedAnswer[i]).prop(attribute) == undefined) {
                        checkedAnswer[i][attribute] = 1;
                    } else {
                        checkedAnswer[i][attribute] += 1;
                    }
                  }
                }
            }

        };
        surveyStats();
    });


    showBtn.on('click', function() {
      event.preventDefault();
      var answerDivs = $('.answers div');
      answerDivs.slideDown();
    })

    var statBtn = $('.stat-btn');

    statBtn.on('click', function() {
      event.preventDefault();
      allAnswers.each(function() {


            var answerFemale = $(this).next().find('.females');
            answerFemale.html($(this).prop('female'));


            var answerMale = $(this).next().find('.males');
            answerMale.html($(this).prop('male'));


            var answerBasic = $(this).next().find('.basic');
            answerBasic.html($(this).prop('basic'));


            var answerAverage = $(this).next().find('.average');
            answerAverage.html($(this).prop('average'));


            var answerProfessional = $(this).next().find('.professional');
            answerProfessional.html($(this).prop('professional'));


            var answerHigher = $(this).next().find('.higher');
            answerHigher.html($(this).prop('higher'));


            var answer15 = $(this).next().find('.15');
            answer15.html($(this).prop('15'));


            var answer19 = $(this).next().find('.19');
            answer19.html($(this).prop('19'));


            var answer31 = $(this).next().find('.31');
            answer31.html($(this).prop('31'));


            var answer51 = $(this).next().find('.51');
            answer51.html($(this).prop('51'));

            var answer61 = $(this).next().find('.61');
            answer61.html($(this).prop('61'));

            var answerPoznan = $(this).next().find('.poznan');
            answerPoznan.html($(this).prop('poznan'));

            var answerAglomeration = $(this).next().find('.aglomeration');
            answerAglomeration.html($(this).prop('aglomeration'));

            var answerOther = $(this).next().find('.other');
            answerOther.html($(this).prop('other'));

      });
    })



});
