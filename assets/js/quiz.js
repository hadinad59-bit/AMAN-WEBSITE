// أمان — محرك اختبار "اختبر وعيك" (ثنائي اللغة)
// بدون أي إرسال أو حفظ بيانات خارج الجلسة الحالية بالمتصفح

var AMAN_QUIZ = [
  {
    q: { ar: 'سمعت إنذار الحريق وأنت داخل المبنى، ما أول تصرف صحيح؟', en: 'You hear the fire alarm while inside the building — what is the first correct action?' },
    options: [
      { ar: 'أتجه فورًا لأقرب مخرج طوارئ وأبدأ الإخلاء', en: 'Head immediately to the nearest emergency exit and start evacuating' },
      { ar: 'أنتظر للتأكد إذا كان الإنذار حقيقيًا', en: 'Wait to confirm whether the alarm is real' },
      { ar: 'أستخدم المصعد للنزول بسرعة', en: 'Use the elevator to get down quickly' },
      { ar: 'أعود لجمع أغراضي الشخصية أولًا', en: 'Go back to collect my personal belongings first' }
    ],
    correct: 0,
    explain: { ar: 'الاستجابة الفورية لإنذار الحريق والتوجه لمخرج الطوارئ تقلل فرص الإصابة؛ لا تنتظر للتأكد ولا تستخدم المصعد.', en: 'Responding immediately to a fire alarm and heading to an emergency exit reduces the chance of injury; don’t wait to confirm and don’t use the elevator.' }
  },
  {
    q: { ar: 'وجدت سلكًا كهربائيًا مكشوفًا في الممر، ماذا تفعل؟', en: 'You find an exposed electrical wire in the hallway — what do you do?' },
    options: [
      { ar: 'ألمسه بحذر لأتأكد إن كان يعمل', en: 'Touch it carefully to check if it’s live' },
      { ar: 'أبتعد عنه وأبلغ الجهة المسؤولة فورًا', en: 'Move away from it and report it immediately' },
      { ar: 'أغطيه بقطعة قماش وأكمل طريقي', en: 'Cover it with a cloth and carry on' },
      { ar: 'أطلب من شخص آخر لمسه بدلًا مني', en: 'Ask someone else to touch it instead of me' }
    ],
    correct: 1,
    explain: { ar: 'الابتعاد عن مصدر الخطر الكهربائي والإبلاغ عنه يمنع الإصابة؛ لا تحاول لمسه أو التعامل معه بنفسك.', en: 'Staying away from an electrical hazard and reporting it prevents injury; never try to touch or handle it yourself.' }
  },
  {
    q: { ar: 'أي نوع طفايات مناسب لحريق الزيوت والدهون في المطبخ؟', en: 'What type of extinguisher suits an oil or grease fire in the kitchen?' },
    options: [
      { ar: 'الماء مباشرة', en: 'Water, directly' },
      { ar: 'طفاية من نوع مناسب لحرائق الزيوت أو تغطية الإناء', en: 'An extinguisher suited to oil fires, or covering the pot' },
      { ar: 'أي نوع طفاية متوفر', en: 'Any extinguisher that’s available' },
      { ar: 'الرمل فقط', en: 'Sand only' }
    ],
    correct: 1,
    explain: { ar: 'الماء يزيد اشتعال حرائق الزيوت والدهون؛ استخدم طفاية مناسبة لهذا النوع أو غطِّ الإناء لخنق النار إن كان ذلك آمنًا.', en: 'Water makes oil and grease fires worse; use an extinguisher suited to this type, or cover the pot to smother the fire if it is safe to do so.' }
  },
  {
    q: { ar: 'أثناء الإخلاء من مبنى بسبب حريق، ما الصحيح؟', en: 'While evacuating a building due to fire, what is correct?' },
    options: [
      { ar: 'اتبع مسار الإخلاء المحدد ولا تتدافع', en: 'Follow the designated evacuation route and don’t push' },
      { ar: 'اركض بأقصى سرعة متجاوزًا الآخرين', en: 'Run as fast as possible, pushing past others' },
      { ar: 'استخدم المصعد لأنه أسرع', en: 'Use the elevator because it’s faster' },
      { ar: 'توقف لتصوير الموقف', en: 'Stop to film the situation' }
    ],
    correct: 0,
    explain: { ar: 'اتباع مسار الإخلاء بهدوء ودون تدافع يحافظ على سلامة الجميع، والمصاعد قد تتعطل أو تصبح خطرة أثناء الحريق.', en: 'Following the evacuation route calmly and without pushing keeps everyone safer; elevators can fail or become dangerous during a fire.' }
  },
  {
    q: { ar: 'شخص أمامك تعرّض لحرق بسيط، ما الإجراء الأول الصحيح؟', en: 'Someone in front of you has a minor burn — what is the correct first step?' },
    options: [
      { ar: 'وضع معجون أسنان أو زبدة على الحرق', en: 'Apply toothpaste or butter to the burn' },
      { ar: 'تبريد المنطقة بماء جارٍ فاتر لعدة دقائق', en: 'Cool the area with lukewarm running water for several minutes' },
      { ar: 'فقء أي فقاعات تظهر على الجلد', en: 'Pop any blisters that appear on the skin' },
      { ar: 'تجاهله لأنه سيلتئم من تلقاء نفسه', en: 'Ignore it since it will heal on its own' }
    ],
    correct: 1,
    explain: { ar: 'تبريد الحرق بماء جارٍ فاتر لعدة دقائق يخفف الضرر؛ تجنّب المواد المنزلية العشوائية وفقء الفقاعات.', en: 'Cooling a burn with lukewarm running water for several minutes reduces damage; avoid random household remedies and popping blisters.' }
  },
  {
    q: { ar: 'ما أهم إجراء وقائي بخصوص التوصيلات الكهربائية بالمنزل؟', en: 'What is the most important precaution for home electrical connections?' },
    options: [
      { ar: 'تجنّب التحميل الزائد على المقبس الواحد', en: 'Avoid overloading a single outlet' },
      { ar: 'ترك الأسلاك التالفة كما هي إن كانت لا تزال تعمل', en: 'Leave damaged wires as they are if they still work' },
      { ar: 'استخدام التوصيلات بالقرب من الماء', en: 'Use connections near water' },
      { ar: 'لا داعي لفحص الأسلاك دوريًا', en: 'No need to inspect wires periodically' }
    ],
    correct: 0,
    explain: { ar: 'التحميل الزائد على المقبس من أكثر أسباب الحرائق الكهربائية شيوعًا؛ افحص الأسلاك دوريًا وابتعد عن الماء عند استخدام الكهرباء.', en: 'Overloading an outlet is one of the most common causes of electrical fires; inspect wiring regularly and keep electricity away from water.' }
  },
  {
    q: { ar: 'عند اكتشاف رائحة تسرب غاز في المنزل، ما الصحيح؟', en: 'You notice a gas leak smell at home — what is correct?' },
    options: [
      { ar: 'أشعل عود ثقاب للتأكد من مصدر الرائحة', en: 'Light a match to trace the smell' },
      { ar: 'أفتح النوافذ، أغلق مصدر الغاز إن أمكن بأمان، وأخرج فورًا دون تشغيل أي مفتاح كهربائي', en: 'Open windows, safely shut off the gas if possible, and leave immediately without switching anything electrical' },
      { ar: 'أشغّل المروحة الكهربائية لتفريغ الرائحة', en: 'Turn on an electric fan to clear the smell' },
      { ar: 'أنتظر حتى تزول الرائحة من تلقاء نفسها', en: 'Wait for the smell to go away on its own' }
    ],
    correct: 1,
    explain: { ar: 'أي شرارة كهربائية أو لهب قد يسبب انفجارًا؛ لا تشغّل مفاتيح الكهرباء، افتح النوافذ إن أمكن واخرج فورًا وأبلغ الجهات المختصة.', en: 'Any electrical spark or flame could cause an explosion; don’t flip switches, open windows if possible, leave immediately, and notify the authorities.' }
  },
  {
    q: { ar: 'ما أهم نقطة يجب معرفتها مسبقًا في أي مبنى تتردد عليه؟', en: 'What is the most important thing to know in advance about any building you visit?' },
    options: [
      { ar: 'مكان أقرب مقهى', en: 'The location of the nearest café' },
      { ar: 'موقع مخارج الطوارئ ونقطة التجمع', en: 'The location of emergency exits and the assembly point' },
      { ar: 'عدد الطوابق فقط', en: 'Just the number of floors' },
      { ar: 'لا حاجة لمعرفة أي شيء مسبقًا', en: 'No need to know anything in advance' }
    ],
    correct: 1,
    explain: { ar: 'معرفة مخارج الطوارئ ونقطة التجمع مسبقًا توفّر وقتًا ثمينًا وتقلل الارتباك عند وقوع أي طارئ فعلي.', en: 'Knowing emergency exits and the assembly point in advance saves valuable time and reduces confusion during an actual emergency.' }
  }
];

(function () {
  var container = document.querySelector('[data-quiz-app]');
  if (!container) return;

  function getLang() {
    return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'ar';
  }

  var t = {
    ar: { qOf: function (i, n) { return 'سؤال ' + i + ' من ' + n; }, next: 'السؤال التالي', correct: 'إجابة صحيحة ✓', wrong: 'إجابة غير دقيقة', resultLabel: 'النتيجة النهائية', noSave: 'لم يُحفظ أي جزء من إجاباتك أو نتيجتك — الاختبار محلي بالكامل داخل متصفحك.', restart: 'إعادة الاختبار', learnMore: 'تعلّم السلامة',
      levels: { champ: 'بطل السلامة 🏆', great: 'مستوى وعي ممتاز ⭐', good: 'وعي جيد، وفي مجال للتحسّن 👍', start: 'ابدأ رحلتك التعليمية من "تعلّم السلامة" 🌱' } },
    en: { qOf: function (i, n) { return 'Question ' + i + ' of ' + n; }, next: 'Next Question', correct: 'Correct ✓', wrong: 'Not quite', resultLabel: 'Final Result', noSave: 'None of your answers or your score were saved — the quiz runs entirely in your browser.', restart: 'Retake the Quiz', learnMore: 'Learn Safety',
      levels: { champ: 'Safety Champion 🏆', great: 'Excellent Awareness ⭐', good: 'Good awareness, room to grow 👍', start: 'Start your learning journey from "Learn Safety" 🌱' } }
  };

  var current = 0;
  var score = 0;
  var answered = false;

  function render() {
    var lang = getLang();
    if (current >= AMAN_QUIZ.length) {
      renderResult();
      return;
    }
    var item = AMAN_QUIZ[current];
    answered = false;
    var progressPct = Math.round((current / AMAN_QUIZ.length) * 100);

    container.innerHTML =
      '<div class="quiz-progress"><span style="width:' + progressPct + '%"></span></div>' +
      '<p class="badge">' + t[lang].qOf(current + 1, AMAN_QUIZ.length) + '</p>' +
      '<h3>' + item.q[lang] + '</h3>' +
      '<div class="quiz-options"></div>' +
      '<div class="quiz-explain" hidden></div>' +
      '<div style="margin-top:20px; text-align:left"><button class="btn btn-primary" data-next hidden>' + t[lang].next + '</button></div>';

    var optionsWrap = container.querySelector('.quiz-options');
    item.options.forEach(function (opt, idx) {
      var btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt[lang];
      btn.addEventListener('click', function () { selectOption(idx); });
      optionsWrap.appendChild(btn);
    });
  }

  function selectOption(idx) {
    if (answered) return;
    answered = true;
    var lang = getLang();
    var item = AMAN_QUIZ[current];
    var buttons = container.querySelectorAll('.quiz-option');
    buttons.forEach(function (b, i) {
      if (i === item.correct) b.classList.add('correct');
      else if (i === idx) b.classList.add('wrong');
    });
    if (idx === item.correct) score++;

    var explainEl = container.querySelector('.quiz-explain');
    explainEl.hidden = false;
    explainEl.innerHTML = '<strong>' + (idx === item.correct ? t[lang].correct : t[lang].wrong) + '</strong><br>' + item.explain[lang];

    var nextBtn = container.querySelector('[data-next]');
    nextBtn.hidden = false;
    nextBtn.addEventListener('click', function () {
      current++;
      render();
    }, { once: true });
  }

  function levelKey(pct) {
    if (pct >= 90) return 'champ';
    if (pct >= 70) return 'great';
    if (pct >= 50) return 'good';
    return 'start';
  }

  function renderResult() {
    var lang = getLang();
    var pct = Math.round((score / AMAN_QUIZ.length) * 100);
    container.innerHTML =
      '<div class="quiz-result">' +
        '<p class="badge">' + t[lang].resultLabel + '</p>' +
        '<div class="score">' + score + ' / ' + AMAN_QUIZ.length + '</div>' +
        '<h3>' + t[lang].levels[levelKey(pct)] + '</h3>' +
        '<p class="small">' + t[lang].noSave + '</p>' +
        '<div class="hero actions" style="padding:0; margin-top:20px">' +
          '<button class="btn btn-primary" data-restart>' + t[lang].restart + '</button>' +
          '<a class="btn btn-secondary" href="learn-safety.html">' + t[lang].learnMore + '</a>' +
        '</div>' +
      '</div>';

    container.querySelector('[data-restart]').addEventListener('click', function () {
      current = 0; score = 0; render();
    });
  }

  render();
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () { render(); });
  });
})();
