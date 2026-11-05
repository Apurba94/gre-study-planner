# GRE Study Planner

Turn your test date, hours and weak areas into a week-by-week study plan you can tick off.

Part of the [GRE and TOEFL Study Suite](https://github.com/Apurba94/gre-toefl-study-suite): 100 free study apps for the GRE General Test and more. It works offline, as a Windows program or in the browser.

## Download and run

- **Windows:** download `GRE Study Planner.exe` from the [latest release](https://github.com/Apurba94/gre-study-planner/releases/latest) and open it. Nothing to install. It opens in its own window and saves your progress in your user folder.
- **Browser:** open it online in the suite's web edition at https://gre-toefl-study-suite.vercel.app/apps/gre-study-planner/ . Progress stays in that browser.
- **From source:** `python launcher.py` (Python 3.10 or later, no packages needed).

## What it does

Tell the planner your test date, how many hours a week you can study and how confident you feel in each of seven GRE areas. It gives each week a focus, more weeks for weaker areas, a final week of full practice tests, and tasks that point to the apps in this suite.

Sections: Plan, Progress, About.

## How to use it

1. Set your test date and weekly hours in **Plan**.
2. Rate each area honestly from 1 (very weak) to 5 (strong).
3. Tick weeks off as you finish them. Change the ratings as you improve, and the plan updates.

## Good to know

- All questions, passages and definitions were written for this suite. None are official ETS questions. For official practice, use the materials on ets.org.
- It follows the GRE General Test as shortened in September 2023 and the TOEFL iBT as updated in January 2026. Formats change, so check ets.org before your test.
- Feedback on writing and speaking counts things a program can count honestly, such as length and linking words. It does not give an official score.
- Not endorsed by or affiliated with ETS. GRE and TOEFL are registered trademarks of ETS.

## For developers

The app is plain HTML and JavaScript in `web/`, run by a small Python launcher that serves it on 127.0.0.1 only and needs a secret token for saving. Tests: `node --test "tests/*.test.js"` (23 tests) and `python -m unittest discover -s tests`. Build the .exe with `python build_exe.py`.

Built with AI assistance (Claude Code). MIT licence. By JANIN A APURBA.
