/* GRE Study Planner: a week-by-week plan from your test date, hours and weakest areas. */
(function () {
  'use strict';
  const AREAS = [
    { name: 'Vocabulary', tasks: ['15 new words a day in GRE Vocab Builder', 'Word Roots Explorer twice a week'] },
    { name: 'Text completion and sentence equivalence', tasks: ['20 questions in each trainer', 'Signal Word Trainer'] },
    { name: 'Reading and arguments', tasks: ['Four passages in GRE Reading Lab', '10 questions in Argument Reasoning Trainer'] },
    { name: 'Arithmetic, algebra and number properties', tasks: ['Two 15-question sets a day across the drills', 'Quant Formula Cards'] },
    { name: 'Geometry and coordinates', tasks: ['Geometry Trainer and Coordinate Geometry sets', 'Learn the rules tabs'] },
    { name: 'Data analysis, statistics and probability', tasks: ['Data Interpretation Lab', 'Statistics Trainer and Probability and Counting'] },
    { name: 'Issue essay', tasks: ['Two timed essays in Issue Essay Writer', 'Rate one with Essay Self-Review'] },
  ];
  const App = {
    about: 'Tell the planner your test date, how many hours a week you can study and how confident you feel in each of seven GRE areas. It gives each week a focus, more weeks for weaker areas, a final week of full practice tests, and tasks that point to the apps in this suite.',
    how: ['Set your test date and weekly hours in **Plan**.', 'Rate each area honestly from 1 (very weak) to 5 (strong).', 'Tick weeks off as you finish them. Change the ratings as you improve, and the plan updates.'],
    tabs: [{ id: 'plan', label: 'Plan', render(el) { SK.plannerView(el, { areas: AREAS }); } }],
    AREAS,
    checks: {
      'weaker areas get more weeks and the last week is for practice tests': (data, assert) => {
        const topics = AREAS.map((a, i) => ({ name: a.name, weight: i === 0 ? 5 : 1, tasks: a.tasks }));
        const plan = SK.planWeeks('2026-01-05', '2026-03-30', topics, 10);
        assert.equal(plan.length, 12);
        assert.ok(plan.filter((w) => w.focus === 'Vocabulary').length >= 3);
        assert.equal(plan[plan.length - 1].focus, 'Full practice tests and review');
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
