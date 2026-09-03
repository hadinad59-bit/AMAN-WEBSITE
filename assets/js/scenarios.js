// أمان — محرك "تعلّم بالسيناريو": مواقف متفرّعة، بدون أي حفظ بيانات خارج الجلسة

var AMAN_SCENARIOS = [
  {
    id: 'fire',
    icon: '🔥',
    title: { ar: 'حريق', en: 'Fire' },
    start: 's1',
    steps: {
      s1: {
        text: { ar: 'أنت الآن داخل مبنى وسمعت إنذار الحريق فجأة. ماذا ستفعل؟', en: 'You are inside a building and suddenly hear the fire alarm. What will you do?' },
        options: [
          { label: { ar: 'أذهب للمصعد لأنه أسرع', en: 'Take the elevator because it is faster' }, next: 's2a' },
          { label: { ar: 'أبحث عن أقرب مسار إخلاء آمن وأتجه له', en: 'Find the nearest safe evacuation route and head there' }, next: 's2b' },
          { label: { ar: 'أعود لمكتبي لأخذ أغراضي أولًا', en: 'Go back to my desk to grab my things first' }, next: 's2c' }
        ]
      },
      s2a: { outcome: { ar: 'المصاعد قد تتعطل أو تصبح خطرة أثناء الحريق. كان يفضّل استخدام السلالم ومسار الإخلاء المخصص.', en: 'Elevators can fail or become dangerous during a fire. Stairs and the designated evacuation route are the safer choice.' }, tier: 'poor' },
      s2b: {
        text: { ar: 'وأنت متجه لمسار الإخلاء، تلاحظ شخصًا مرتبكًا لا يعرف الاتجاه. ماذا تفعل؟', en: 'While heading to the exit, you notice someone confused who does not know the way. What do you do?' },
        options: [
          { label: { ar: 'أدله على الاتجاه الصحيح وأكمل معه بهدوء', en: 'Point them the right way and continue calmly together' }, next: 's3b' },
          { label: { ar: 'أتجاهله وأكمل طريقي بسرعة', en: 'Ignore them and hurry on' }, next: 's3a' }
        ]
      },
      s2c: { outcome: { ar: 'العودة لأخذ الممتلكات أثناء إنذار الحريق تعرّضك لخطر حقيقي — السلامة دائمًا أهم من أي غرض.', en: 'Going back for belongings during a fire alarm puts you at real risk — safety always comes before any object.' }, tier: 'poor' },
      s3a: { outcome: { ar: 'وصلت بسرعة، لكن ترك شخص مرتبك بالخلف قد يعرّضه للخطر. المساعدة السريعة والهادئة أفضل متى أمكن ذلك بأمان.', en: 'You got out quickly, but leaving a confused person behind could put them at risk. Calm, quick help is better when it can be done safely.' }, tier: 'good' },
      s3b: { outcome: { ar: 'قرار ممتاز — وصلت لنقطة التجمع بأمان وساعدت شخصًا آخر دون تعريض نفسك لخطر إضافي.', en: 'Excellent decision — you reached the assembly point safely and helped someone else without adding risk to yourself.' }, tier: 'excellent' }
    }
  },
  {
    id: 'gas',
    icon: '💨',
    title: { ar: 'تسرب غاز', en: 'Gas Leak' },
    start: 's1',
    steps: {
      s1: {
        text: { ar: 'شممت رائحة غاز قوية بالمطبخ. ما أول تصرف؟', en: 'You smell a strong gas odor in the kitchen. What is your first move?' },
        options: [
          { label: { ar: 'أشغّل المروحة الكهربائية لتفريغ الرائحة', en: 'Turn on the electric fan to clear the smell' }, next: 's2a' },
          { label: { ar: 'أفتح النوافذ وأخرج فورًا دون لمس أي مفتاح كهربائي', en: 'Open windows and leave immediately without touching any switch' }, next: 's2b' }
        ]
      },
      s2a: { outcome: { ar: 'تشغيل أي جهاز كهربائي قد يولّد شرارة تسبب انفجارًا. تجنّب أي مفتاح كهربائي تمامًا عند الشك بتسرب غاز.', en: 'Switching on any electrical device can create a spark and cause an explosion. Avoid every switch entirely when you suspect a gas leak.' }, tier: 'poor' },
      s2b: {
        text: { ar: 'خرجت بأمان. ماذا بعد؟', en: 'You got out safely. What next?' },
        options: [
          { label: { ar: 'أبلّغ الجهة المختصة وأنتظر بعيدًا عن المكان', en: 'Notify the authorities and wait away from the location' }, next: 's3' },
          { label: { ar: 'أعود بعد دقيقة للتأكد بنفسي', en: 'Go back after a minute to check myself' }, next: 's3b' }
        ]
      },
      s3: { outcome: { ar: 'ممتاز — الإبلاغ والانتظار بمكان آمن هو الإجراء الصحيح تمامًا.', en: 'Excellent — reporting it and waiting in a safe place is exactly the right move.' }, tier: 'excellent' },
      s3b: { outcome: { ar: 'العودة المبكرة قبل تأكيد الجهات المختصة قد تعرّضك للخطر مرة أخرى دون داعٍ.', en: 'Going back early before authorities confirm it is safe puts you at needless risk again.' }, tier: 'poor' }
    }
  },
  {
    id: 'injury',
    icon: '🩹',
    title: { ar: 'إصابة شخص', en: 'Someone Is Injured' },
    start: 's1',
    steps: {
      s1: {
        text: { ar: 'شخص أمامك سقط وأصيب بجرح ينزف بشدة. ماذا تفعل أولًا؟', en: 'Someone in front of you fell and has a heavily bleeding wound. What do you do first?' },
        options: [
          { label: { ar: 'أضغط مباشرة على الجرح بقطعة قماش نظيفة وأطلب المساعدة الطبية', en: 'Apply direct pressure with a clean cloth and call for medical help' }, next: 's2' },
          { label: { ar: 'أتركه ليتحرك بنفسه لأنه غالبًا بسيط', en: 'Let them move on their own since it is probably minor' }, next: 's2b' }
        ]
      },
      s2: { outcome: { ar: 'قرار صحيح — الضغط المباشر على النزيف وطلب المساعدة الطبية يحافظ على سلامة المصاب حتى وصول الفريق المختص.', en: 'The right call — direct pressure on the bleeding and calling for medical help keeps the person safe until responders arrive.' }, tier: 'excellent' },
      s2b: { outcome: { ar: 'النزيف الشديد يحتاج تدخلًا فوريًا؛ تجاهله قد يزيد خطورة الحالة.', en: 'Heavy bleeding needs immediate action; ignoring it can make the situation more dangerous.' }, tier: 'poor' }
    }
  },
  {
    id: 'power',
    icon: '⚡',
    title: { ar: 'انقطاع الكهرباء', en: 'Power Outage' },
    start: 's1',
    steps: {
      s1: {
        text: { ar: 'انقطعت الكهرباء فجأة بالمبنى ليلًا. ماذا تفعل؟', en: 'The power suddenly goes out in the building at night. What do you do?' },
        options: [
          { label: { ar: 'أستخدم إضاءة هاتفي وأتحرك بهدوء لمكان آمن', en: 'Use my phone light and calmly move to a safe spot' }, next: 's2' },
          { label: { ar: 'أشعل شمعة قرب الستائر للإضاءة', en: 'Light a candle near the curtains for light' }, next: 's2b' }
        ]
      },
      s2: { outcome: { ar: 'تصرّف آمن — إضاءة الهاتف لا تشكّل خطر حريق وتساعدك على التحرك بهدوء.', en: 'Safe choice — phone light carries no fire risk and helps you move calmly.' }, tier: 'excellent' },
      s2b: { outcome: { ar: 'الشموع قرب المواد القابلة للاشتعال (كالستائر) من أسباب الحرائق المنزلية الشائعة — تجنّبها إن أمكن.', en: 'Candles near flammable materials (like curtains) are a common cause of home fires — avoid them if you can.' }, tier: 'poor' }
    }
  },
  {
    id: 'flood',
    icon: '🌧️',
    title: { ar: 'سيول', en: 'Flooding' },
    start: 's1',
    steps: {
      s1: {
        text: { ar: 'أنت بالسيارة والأمطار غزيرة، وأمامك طريق يبدو أن فيه تجمّع مياه. ماذا تفعل؟', en: 'You are driving in heavy rain and the road ahead looks flooded. What do you do?' },
        options: [
          { label: { ar: 'أكمل القيادة بسرعة لأتجاوز المكان بسرعة', en: 'Drive through quickly to get past it fast' }, next: 's2a' },
          { label: { ar: 'أتوقف وأبحث عن طريق بديل أبعد عن مسار السيول', en: 'Stop and look for an alternate route away from the flow' }, next: 's2b' }
        ]
      },
      s2a: { outcome: { ar: 'القيادة عبر المياه المتجمّعة من أخطر أسباب حوادث السيول — قد تجرف السيارة بسرعة أكبر مما تتوقع.', en: 'Driving through standing floodwater is one of the most dangerous causes of flood accidents — it can sweep a car away faster than expected.' }, tier: 'poor' },
      s2b: { outcome: { ar: 'قرار صحيح تمامًا — الابتعاد عن مجاري السيول وطريق بديل أهم بكثير من توفير بضع دقائق.', en: 'Exactly right — staying away from the flow and taking another route matters far more than saving a few minutes.' }, tier: 'excellent' }
    }
  },
  {
    id: 'evac-disability',
    icon: '♿',
    title: { ar: 'إخلاء مع شخص ذي إعاقة', en: 'Evacuating With a Person With a Disability' },
    start: 's1',
    steps: {
      s1: {
        text: { ar: 'إنذار حريق وبجانبك شخص يستخدم كرسيًا متحركًا. ماذا تفعل؟', en: 'A fire alarm goes off, and next to you is someone using a wheelchair. What do you do?' },
        options: [
          { label: { ar: 'أسأله عن أفضل طريقة لمساعدته وأتبع خطة الإخلاء المناسبة', en: 'Ask them the best way to help and follow the appropriate evacuation plan' }, next: 's2' },
          { label: { ar: 'أحمله بسرعة دون سؤال لأنه أسرع', en: 'Carry them quickly without asking because it is faster' }, next: 's2b' }
        ]
      },
      s2: { outcome: { ar: 'ممتاز — سؤال الشخص عن أفضل طريقة يحترم احتياجاته ويقلل خطر إصابته أثناء المساعدة.', en: 'Excellent — asking the person the best way respects their needs and lowers the risk of injury while helping.' }, tier: 'excellent' },
      s2b: { outcome: { ar: 'التحرك العشوائي بدون سؤال الشخص قد يسبب له إصابة أو ضررًا؛ التواصل أولًا أهم من السرعة.', en: 'Moving someone randomly without asking can cause injury; communicating first matters more than speed.' }, tier: 'poor' }
    }
  }
];

(function () {
  var picker = document.querySelector('[data-scenario-picker]');
  var player = document.querySelector('[data-scenario-player]');
  if (!picker || !player) return;

  function getLang() {
    return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'ar';
  }

  var t = {
    ar: { pick: 'اختر موقفًا', start: 'ابدأ السيناريو', evalLabel: 'تقييم قرارك في حالة الطوارئ', tiers: { excellent: 'ممتاز 🏆', good: 'جيد 👍', poor: 'يحتاج انتباه ⚠️' }, restart: 'جرّب سيناريو آخر', noSave: 'لم يُحفظ أي جزء من هذا السيناريو — كله محلي داخل متصفحك.' },
    en: { pick: 'Choose a situation', start: 'Start Scenario', evalLabel: 'Your decision rating', tiers: { excellent: 'Excellent 🏆', good: 'Good 👍', poor: 'Needs attention ⚠️' }, restart: 'Try another scenario', noSave: 'None of this scenario was saved — it all runs locally in your browser.' }
  };

  var current = null;
  var stepId = null;

  function renderPicker() {
    var lang = getLang();
    picker.innerHTML = '';
    AMAN_SCENARIOS.forEach(function (sc) {
      var btn = document.createElement('button');
      btn.className = 'situation-btn';
      btn.innerHTML = '<span class="emoji">' + sc.icon + '</span> ' + sc.title[lang];
      btn.addEventListener('click', function () { loadScenario(sc.id); });
      picker.appendChild(btn);
    });
  }

  function loadScenario(id) {
    current = AMAN_SCENARIOS.find(function (s) { return s.id === id; });
    stepId = current.start;
    renderStep();
    player.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderStep() {
    var lang = getLang();
    var step = current.steps[stepId];

    if (step.outcome) {
      player.innerHTML =
        '<div class="quiz-result">' +
          '<p class="badge">' + t[lang].evalLabel + '</p>' +
          '<h3>' + t[lang].tiers[step.tier] + '</h3>' +
          '<p>' + step.outcome[lang] + '</p>' +
          '<p class="small">' + t[lang].noSave + '</p>' +
          '<button class="btn btn-primary" data-restart>' + t[lang].restart + '</button>' +
        '</div>';
      player.querySelector('[data-restart]').addEventListener('click', function () {
        current = null; stepId = null;
        player.innerHTML = '';
        picker.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    player.innerHTML =
      '<p class="badge">' + current.icon + ' ' + current.title[lang] + '</p>' +
      '<h3>' + step.text[lang] + '</h3>' +
      '<div class="quiz-options"></div>';

    var wrap = player.querySelector('.quiz-options');
    step.options.forEach(function (opt) {
      var btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = opt.label[lang];
      btn.addEventListener('click', function () { stepId = opt.next; renderStep(); });
      wrap.appendChild(btn);
    });
  }

  renderPicker();
  document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      renderPicker();
      if (current) renderStep();
    });
  });
})();
