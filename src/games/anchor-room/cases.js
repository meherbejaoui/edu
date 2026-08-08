/*
  THE ANCHOR ROOM — content
  Reconstructed verbatim from the deployed minified bundle (edu/index.html,
  commit 7799533). Content and structure preserved exactly; only the visual
  layer was rebuilt onto the shared edu design system.
*/

export const CASES = [
  {
    "id": "disruptor",
    "pack": "foundations",
    "title": "The Irreplaceable Disruptor",
    "role": "You are a team lead at a public research department.",
    "setting": "Alex is a technical genius — nearly 40% of your team's output, and lead on the project that secures next year's funding. Alex is also consistently late, speaks to colleagues with contempt, and hoards information like a fortress. Two talented juniors have quietly started interviewing elsewhere.",
    "question": "The funding review is in three weeks. Something has to give.",
    "listenIntro": "You have time for THREE conversations before you must act. Some people will come to you. Others never will — unless you go to them.",
    "stakeholders": [
      {
        "id": "alex",
        "name": "Alex",
        "role": "Lead engineer",
        "loud": true,
        "teaser": "“Can we make this quick? I'm carrying this entire project.”",
        "insight": "Behind the arrogance, Alex is drowning. “If I document everything, I'm replaceable. If something breaks, it's my name on it. You think I like being the only one who knows how this works?” The gatekeeping isn't just ego — it's fear wearing armor."
      },
      {
        "id": "director",
        "name": "Director Hale",
        "role": "Senior director",
        "loud": true,
        "teaser": "“A word of advice, before you do anything rash…”",
        "insight": "“Don't rock the boat with Alex right now. We cannot afford to jeopardize that funding. Handle the 'personality issues' after the contract is signed.” You notice Hale's own performance bonus is tied to that contract. The advice may not be neutral."
      },
      {
        "id": "maya",
        "name": "Maya",
        "role": "Junior analyst",
        "loud": false,
        "teaser": "She never complains. Her camera has been off in meetings for a month.",
        "insight": "It takes ten minutes of silence before she talks. “I didn't file anything because everyone knows what happens to people who complain about Alex. It's not just me — three of us have offers in hand. We were just waiting to see if anyone noticed.”"
      },
      {
        "id": "sam",
        "name": "Sam",
        "role": "Veteran engineer",
        "loud": false,
        "teaser": "He keeps his head down and his résumé updated.",
        "insight": "“The documentation is two years stale. If Alex got hit by a bus tomorrow, this project dies with them. You don't have an Alex problem — you have a single point of failure that happens to have a personality.”"
      },
      {
        "id": "priya",
        "name": "Priya",
        "role": "HR partner",
        "loud": false,
        "teaser": "“Formally? There's nothing on file.”",
        "insight": "“That's what worries me. Five people have come to me 'off the record' in a year. Nothing on paper means nothing protects them — and nothing protects you when this eventually detonates.”"
      }
    ],
    "pressure": {
      "from": "DIRECTOR HALE — PRIVATE",
      "text": "“I hear you've been asking around. Let me be clearer: if that funding slips because you picked a fight over office manners, that's on you. Sign-off is in three weeks. Don't make me regret backing you for this role.”",
      "note": "Intimidation just entered the room. Notice what it's doing to your options."
    },
    "decisionPrompt": "Three weeks to funding review. What do you do about Alex?",
    "decisions": [
      {
        "id": "A",
        "title": "Protect the contract first",
        "body": "Have a quiet, informal word with Alex about 'toning it down.' Deal with the real issues after signing. The department's survival buys everything else time.",
        "pushes": [
          "Urgency bias",
          "The 'brilliant jerk' pass",
          "Authority intimidation"
        ],
        "anchors": [],
        "lens1": {
          "where": "On the engineering floor, they say:",
          "text": "“Management saw everything and chose the money. Maya's gone by spring. Why would anyone speak up now?”"
        },
        "lens2": {
          "where": "On the executive floor, they say:",
          "text": "“Finally, a lead who understands priorities. You can't fix culture in a bankrupt department. Pragmatic. Promotable.”"
        },
        "later": "EIGHTEEN MONTHS LATER — The contract was signed. Maya and two others left within four months; recruiting replacements cost more than the raise Alex demanded — and received. The documentation is now three years stale. Nothing has detonated yet. The word is 'yet.'"
      },
      {
        "id": "B",
        "title": "Draw the line now",
        "body": "Meet Alex formally: name the behavior, set clear expectations, and mandate a knowledge-sharing plan starting this week. Tell Hale you're protecting the project by protecting the team — before signing, not after.",
        "pushes": [],
        "anchors": [
          "Mutual respect, without exception",
          "Knowledge redundancy",
          "The talent pipeline"
        ],
        "lens1": {
          "where": "On the engineering floor, they say:",
          "text": "“Someone finally said it out loud. Risky as hell three weeks before funding — but Maya unpacked her résumé.”"
        },
        "lens2": {
          "where": "On the executive floor, they say:",
          "text": "“Reckless timing. If Alex walks and the contract dies, this 'principled stand' will have cost forty people their jobs. Principles are cheap when it's not your budget.”"
        },
        "later": "EIGHTEEN MONTHS LATER — Alex threatened to quit, didn't, and after two rocky months began mentoring — it turned out being the only one who knew everything was the thing burning them out. One junior still left. The funding survived. It was never actually about Alex's genius; it was about whether the team could outlive it."
      },
      {
        "id": "C",
        "title": "De-risk quietly, confront later",
        "body": "No confrontation yet. Launch 'routine' pair-programming and documentation sprints to break the knowledge monopoly. Once Alex is no longer a single point of failure, you'll hold the harder conversation from strength.",
        "pushes": [
          "Avoidance of high-stakes friction"
        ],
        "anchors": [
          "Knowledge redundancy"
        ],
        "lens1": {
          "where": "On the engineering floor, they say:",
          "text": "“Smart chess, maybe. But Maya isn't waiting for your chess game to finish. The disrespect is still happening every single morning.”"
        },
        "lens2": {
          "where": "On the executive floor, they say:",
          "text": "“Elegant. No drama, no risk to the contract, and the bus-factor problem quietly disappears. This is how grown-ups do it.”"
        },
        "later": "EIGHTEEN MONTHS LATER — The documentation sprints worked; the monopoly broke. But the confrontation you postponed never quite happened — there was always a next deadline. Maya left. Alex is politer to you now, and exactly the same to everyone junior. Strategy without the hard conversation turned out to be half a decision."
      }
    ],
    "heatPrompt": "Now the hardest room: you sit across from Alex to explain where things stand. How do you open?",
    "heats": [
      {
        "id": "blame",
        "title": "Point upward",
        "body": "“Look, this is coming from above me. Hale, HR… my hands are tied here.”",
        "verdict": "The message lands, but you've taught Alex — and yourself — that your decisions belong to someone else. Authority you disown is authority you lose.",
        "push": "Diffusion of responsibility"
      },
      {
        "id": "firm",
        "title": "Heard, and held",
        "body": "“Alex, I know you're under real stress, and I value your work — I mean that. But my job is a team that survives you, me, and any single person. The disrespect ends, and the gatekeeping ends. That's not up for negotiation. How we get there — that part, I want to build with you.”",
        "verdict": "Alex goes quiet for a long moment. Being heard and being held to a line at the same time is a thing most people have rarely experienced. It doesn't feel like winning. It feels like weather changing.",
        "anchor": "Firm and fair are not opposites"
      },
      {
        "id": "soften",
        "title": "Soften the blow",
        "body": "“Honestly, you're doing great — there are just a couple of tiny perception things we should smooth over…”",
        "verdict": "Alex leaves the room reassured that nothing needs to change. You leave the room having held a meeting instead of a line. The problem now has your fingerprints on it.",
        "push": "Fear of being disliked"
      }
    ]
  },
  {
    "id": "budget",
    "pack": "foundations",
    "title": "The City Budget",
    "role": "You chair the council of River City.",
    "setting": "A one-time $20 million grant has landed. It funds exactly one of three projects — the money cannot be split. Renovate public housing and keep 500 families from displacement this winter. Repair the main bridge engineers say faces 'severe failure' within 24 months, at 5× the repair cost if it fails. Or subsidize a Green Data Center guaranteeing 100 permanent jobs and a stable tax base for 30 years, in a city drifting toward insolvency.",
    "question": "One grant. Three futures. Everyone will know it was you.",
    "listenIntro": "The vote is tonight. You have time for THREE meetings. The loudest voices are already in your lobby. The quietest ones don't know how to find you.",
    "stakeholders": [
      {
        "id": "rosa",
        "name": "Rosa Delgado",
        "role": "Tenants' association leader",
        "loud": true,
        "teaser": "Two hundred people behind her, chanting outside your window.",
        "insight": "“Do you know what a displacement notice in November means? My neighbor is 81. You are not choosing between projects — you're choosing whether she winters in her home or a shelter. Look at me and tell me a bridge matters more.” She's not wrong. That's what makes it hard."
      },
      {
        "id": "deverell",
        "name": "Vera Deverell",
        "role": "VP, Meridian Tech",
        "loud": true,
        "teaser": "Her assistant has called your office four times today.",
        "insight": "“I'll be direct: we need commitment today or the data center goes to Hartwell County. This isn't a threat, it's a board deadline.” It is also, structurally, a threat. But the 100 jobs and 30 years of tax base are real, whatever her tone is."
      },
      {
        "id": "okafor",
        "name": "Chief Engineer Okafor",
        "role": "Public works",
        "loud": false,
        "teaser": "His report has been on your desk for a month. Reports don't chant.",
        "insight": "“Steel doesn't protest, so nobody hears it corroding. The 24-month window isn't a guess — it's fatigue-crack data. If the arterial fails, the East Bank is cut off: no ambulances, no deliveries, no school bus. And we'll rebuild it anyway, at five times the price, in an emergency.”"
      },
      {
        "id": "lindqvist",
        "name": "CFO Lindqvist",
        "role": "City finance",
        "loud": false,
        "teaser": "She speaks in spreadsheets. Nobody rallies around a spreadsheet.",
        "insight": "“Nobody wants to hear this, so I'll say it quietly: our tax base shrinks 2% a year. At this rate the city that's supposed to fund housing AND bridges is functionally insolvent in eight years. Whatever you choose, ask what a bankrupt city can protect. The answer is nothing.”"
      },
      {
        "id": "karim",
        "name": "Karim Haddad",
        "role": "Small business alliance",
        "loud": false,
        "teaser": "“We're not protesting. We're just closing, one by one.”",
        "insight": "“Every pothole adds twenty minutes to my deliveries. Three shops on my street closed this year. We don't make headlines — we just quietly stop existing. Then people ask where the jobs went.”"
      },
      {
        "id": "edna",
        "name": "Edna Whitfield",
        "role": "Retired nurse, East Bank",
        "loud": false,
        "teaser": "She isn't at the protest. The bus route there crosses the failing bridge.",
        "insight": "“I'm not against those families — I was a renter for forty years. But if that bridge closes, my whole neighborhood is an island. Dialysis is on the other side of the river, dear. Nobody chants about dialysis.”"
      }
    ],
    "pressure": {
      "from": "COUNCIL FLOOR — LIVE UPDATE",
      "text": "Meridian Tech has gone public with its ultimatum: commit tonight or the data center moves to Hartwell. Outside, the protest has doubled — they're chanting that you value machines over human lives. Your phone shows 61 messages from business owners about the roads. Every camera in the city is pointed at this building.",
      "note": "Intimidation from one side. Social pressure from the other. The quiet data is still sitting on your desk."
    },
    "decisionPrompt": "The chamber falls silent. The vote is called. Where does the $20 million go?",
    "decisions": [
      {
        "id": "A",
        "title": "The Housing Lifeline",
        "body": "Fund the renovation. 500 families keep their homes this winter. The bridge and the tax base become next year's problem — if there's money next year.",
        "pushes": [
          "Empathy under siege — the 'winter' panic",
          "Moral outcry avoidance"
        ],
        "anchors": [
          "Dignity is not deferrable"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“COUNCIL PUTS PEOPLE FIRST — 500 families saved from a winter on the street. Proof that government can still choose humans over spreadsheets.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“COUNCIL BUYS APPLAUSE, MORTGAGES THE FUTURE — Bridge left to rot, jobs sent to Hartwell. Compassion tonight, collapse on layaway.”"
        },
        "later": "TWO YEARS LATER — The renovations held; no family was displaced that winter, and you still get letters about it. Meridian built in Hartwell. Month 26: the arterial was closed as unsafe — the emergency rebuild is costing 5× and the East Bank spent a year as an island. Edna moved across the river. Both papers were describing the same decision. Both were describing something true."
      },
      {
        "id": "B",
        "title": "The Arterial Repair",
        "body": "Fund the bridge. No ribbon, no applause — just steel that doesn't fail, ambulances that arrive, and a neighborhood that stays connected. The protesters will still be outside tomorrow.",
        "pushes": [],
        "anchors": [
          "The silent interest — steel doesn't chant",
          "Lifecycle cost: pay 1× now or 5× later",
          "Intergenerational equity"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“CONCRETE OVER CHILDREN — Council funds asphalt while 500 families face winter eviction notices. Whose city is this?”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“ADULTS IN THE ROOM, AT LAST — Council fixes what actually holds the city up instead of chasing headlines. Stewardship isn't glamorous. It's necessary.”"
        },
        "later": "TWO YEARS LATER — The bridge is rebuilt; nobody thanks you for a disaster that didn't happen — prevention has no photograph. Meridian went to Hartwell. Forty-one of the 500 families were displaced before an emergency state fund covered the rest; you attended those hearings and said nothing in your own defense. Okafor's report gathers no dust now. Neither do you."
      },
      {
        "id": "C",
        "title": "The Innovation Hub",
        "body": "Fund the data center. 100 permanent jobs, a tax base stabilized for 30 years — a city that can afford to fix bridges and housing in the future, bought at the price of both today.",
        "pushes": [
          "Capital-flight panic — the ultimatum worked"
        ],
        "anchors": [
          "Protect the financial bedrock",
          "A bankrupt city protects no one"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“$20M FOR A TECH GIANT AS FAMILIES FACE EVICTION — Council folds to a corporate ultimatum in record time. The machines won.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“COUNCIL SECURES THE NEXT 30 YEARS — Jobs, solvency, and a tax base that can actually pay for compassion. This is what long-term thinking looks like.”"
        },
        "later": "TWO YEARS LATER — The data center opened; tax revenue is up 11% and Lindqvist's insolvency curve has bent for the first time in a decade. Sixty families were displaced that first winter — the council chamber heard every name read aloud, and so did you. The bridge got emergency triage, not repair. The clock Okafor described is still ticking, just more slowly. You bought the city a future and paid for it with someone's present."
      }
    ],
    "heatPrompt": "Tomorrow you must stand before the groups you did NOT choose. What do you tell them?",
    "heats": [
      {
        "id": "blame",
        "title": "Blame the constraints",
        "body": "“My hands were tied — the grant rules, the state, the timeline. If it were up to me alone…”",
        "verdict": "It buys you the afternoon. But everyone in that room heard a leader claim the decision wasn't theirs — which means next time, why bring decisions to you at all?",
        "push": "Deniability instinct"
      },
      {
        "id": "anchor",
        "title": "Name your anchor",
        "body": "“I won't pretend this didn't hurt you — it did, and I chose it anyway. Here is the principle I used, so you can hold me to it: I weighed every voice, including the ones that weren't in this room, and chose what I believe protects the most people over the longest time. You may think I weighed it wrong. But you will never have to guess how I weighed it.”",
        "verdict": "Someone in the back says, quietly, 'At least you said it to our faces.' It is not forgiveness. It is something rarer — the beginning of being trusted by people who disagree with you.",
        "anchor": "Radical transparency"
      },
      {
        "id": "appease",
        "title": "Promise everyone everything",
        "body": "“This isn't over — we'll find funding for the other projects too, I give you my word.”",
        "verdict": "The room softens. Then someone asks 'when?' and 'how much?' — and you hear yourself improvising a budget that doesn't exist. Hope you can't fund is a loan against your own credibility, at interest.",
        "push": "The approval reflex"
      }
    ]
  },
  {
    "id": "deadline",
    "pack": "foundations",
    "title": "The Deadline of Conscience",
    "role": "You are the release manager. It is your signature on the line.",
    "setting": "A critical banking-app feature ships in 48 hours; missing the deadline means a $50,000 public penalty and a reputation hit. In final review, you find a flaw. It will pass today's inspection — but it plants a systemic risk that could fail in three years. Your team has worked through the weekend and is at breaking point. Your supervisor phones: “It's a minor detail. Don't let perfect be the enemy of done. I'm authorizing you to sign.”",
    "question": "One signature block. Your name in it.",
    "listenIntro": "48 hours on the clock. You have time for THREE conversations. The exhausted are loud. The archives are silent.",
    "stakeholders": [
      {
        "id": "lena",
        "name": "Lena",
        "role": "Lead developer",
        "loud": true,
        "teaser": "“Please tell me you're not doing what I think you're doing.”",
        "insight": "“We've slept nine hours in three days. The flaw is theoretical; the penalty is real, and so is the bonus this team was promised. If you halt this, you're not protecting them — you're burning them. Sign it.” She's crying and furious at the same time, which is how you know she means every word."
      },
      {
        "id": "marsh",
        "name": "Supervisor Marsh",
        "role": "Your boss",
        "loud": true,
        "teaser": "Third call today. He's being very reassuring.",
        "insight": "“You have my authorization — verbal, but you have it. This is what leadership looks like: shipping. Don't overthink a footnote.” You notice he hasn't put a word of it in writing. You notice that you noticed."
      },
      {
        "id": "ito",
        "name": "Counsel Ito",
        "role": "Legal advisor",
        "loud": false,
        "teaser": "She asked for five minutes, off the record. Lawyers rarely whisper.",
        "insight": "“Industry safety regulations change in six months — this flaw is legal today and a clear violation the day they land. If it fails in year three, today's $50k becomes a multi-million lawsuit. And liability follows the signature, not the org chart. I'm telling you this because no one else will.”"
      },
      {
        "id": "duc",
        "name": "Duc",
        "role": "QA engineer",
        "loud": false,
        "teaser": "He flagged something in a ticket nobody read. Tickets don't shout.",
        "insight": "“I modeled the failure mode. It's not abstract: under load, the reconciliation error touches escrow accounts — roughly 200,000 real customers by year three. It won't be a bug report when it happens. It'll be families' money, on the news.”"
      },
      {
        "id": "logs",
        "name": "The incident archive",
        "role": "Ops records, 2019",
        "loud": false,
        "teaser": "A folder nobody opens. History files no complaints.",
        "insight": "You find it near midnight: a 2019 near-miss with the same signature pattern. The engineer who flagged it was overruled 'due to timeline.' The patch that followed cost 14× the original fix. The last line of the postmortem reads: 'Recommend this never be treated as a footnote again.' It was a footnote by the next quarter."
      }
    ],
    "pressure": {
      "from": "LEGAL — URGENT / CONFIDENTIAL",
      "text": "Counsel Ito's memo is now official: the regulation change is confirmed for six months out, and personal liability attaches to the signing officer. You call Marsh to get his authorization in writing. A long pause. “Authorization? I don't recall framing it that way. This is your call — it always was.” He hangs up. The room is suddenly very quiet, and very yours.",
      "note": "The permission you were leaning on was never load-bearing. You are standing alone in the heat now."
    },
    "decisionPrompt": "24 hours left. The signature block is empty. What do you do?",
    "decisions": [
      {
        "id": "A",
        "title": "Ship it",
        "body": "Sign. Save the $50k, the reputation, the team's bonus. Three years is a long time; regulations shift, systems get patched, maybe the failure never comes. Maybe.",
        "pushes": [
          "Loss aversion — the $50k panic",
          "Hyperbolic discounting — Year 3 feels imaginary",
          "Exhaustion-induced surrender"
        ],
        "anchors": [],
        "lens1": {
          "where": "In the team retro, they say:",
          "text": "“Finally, a manager who trusts the team and lives in the real world. The bonus landed. Morale saved. That's leadership.”"
        },
        "lens2": {
          "where": "In the risk community, they say:",
          "text": "“Every catastrophic failure in this industry has this exact meeting in its timeline — the night someone tired signed something they'd read. They just haven't reached year three yet.”"
        },
        "later": "THREE YEARS LATER — For two years, nothing. You almost forgot. Then the new regulations landed, an auditor pulled the release records, and the remediation is running at 14× — the same multiplier as the 2019 postmortem you may or may not have read. Your signature is on page one of the audit. Marsh's name appears nowhere. He was never in the room. That was the point."
      },
      {
        "id": "B",
        "title": "Halt and fix",
        "body": "Stop the release. Take the $50k penalty and the public bruise. Walk into a room of exhausted people and tell them the weekend wasn't enough — and that you'll carry the blame for it personally.",
        "pushes": [],
        "anchors": [
          "Duty of care to 200,000 strangers",
          "The front-page test",
          "The buck stops at the signature"
        ],
        "lens1": {
          "where": "In the team retro, they say:",
          "text": "“The bonus is gone and half of us didn't speak to them for a week. But nobody's pretending we shipped something we'd be afraid to explain on television.”"
        },
        "lens2": {
          "where": "In the risk community, they say:",
          "text": "“A $50k penalty to close a multi-million exposure before a known regulatory change is not a loss. It's the cheapest insurance ever purchased. Most people can't see it because the invoice arrives before the disaster doesn't.”"
        },
        "later": "THREE YEARS LATER — The penalty stung and the quarter was ugly; two people never quite forgave you. When the regulations landed, your release passed audit untouched — the only one in the division that did. Nobody threw a parade; averted disasters don't get parades. Lena said only one thing, a year later: 'I've stopped re-reading everything I sign for you.' It took a moment to realize that was the parade."
      },
      {
        "id": "C",
        "title": "Sign with a paper trail",
        "body": "Ship it — but first, put everything in writing: the flaw, Ito's memo, Marsh's denial, and a funded remediation plan with a hard 6-month deadline, circulated to legal and the board. If they want it shipped, it ships with witnesses.",
        "pushes": [
          "The gray-zone bargain — risk deferred is still risk"
        ],
        "anchors": [
          "Radical documentation",
          "Forcing accountability into the open"
        ],
        "lens1": {
          "where": "In the team retro, they say:",
          "text": "“They found a third door — bonus safe, risk on the record, and Marsh visibly furious about the paper trail, which honestly was a bonus of its own.”"
        },
        "lens2": {
          "where": "In the risk community, they say:",
          "text": "“Clever, and half an answer. The memo protects the signer, not the 200,000 customers — the flaw ships either way. Documentation is a shield, not a fix. Ask whether you protected the system or just yourself.”"
        },
        "later": "THREE YEARS LATER — The paper trail worked: the board couldn't unsee it, and remediation was funded — though it slipped to month nine, because deadlines without champions drift. The fix landed before the regulations did, barely. You were protected throughout. On slow nights you still do the math on those three months of open exposure, times 200,000 accounts, and consider how much of your anchor was principle and how much was laminate."
      }
    ],
    "heatPrompt": "Whatever you chose, you now face the team that gave you their weekend. First sentence. Go.",
    "heats": [
      {
        "id": "blame",
        "title": "Hide behind Legal",
        "body": "“Look, Legal forced my hand here. Take it up with Ito's office.”",
        "verdict": "Ito took a professional risk to warn you quietly, and you just spent her trust to buy yourself an easier meeting. The next warning won't come early. It may not come at all.",
        "push": "Sacrificing your allies to the room"
      },
      {
        "id": "honest",
        "title": "Own it, all of it",
        "body": "“This was my call — not Marsh's, not Legal's, mine — and I know exactly what it cost you. I owe you two things: the full reasoning, tonight, with every question answered. And a promise that your weekend will never again depend on a flaw someone found in hour 46. Ask me anything.”",
        "verdict": "The anger doesn't vanish; anger that's earned shouldn't. But something else settles into the room — the strange calm of people who know precisely where their leader stands, even when they're standing somewhere unpopular.",
        "anchor": "Compassionate firmness"
      },
      {
        "id": "bribe",
        "title": "Promise the bonus anyway",
        "body": "“I'll make it up to you — I'll find the bonus money somewhere, whatever it takes.”",
        "verdict": "You don't control that budget, and half the room knows it. When the money doesn't materialize, this meeting will be remembered not as the day you decided, but as the day you promised.",
        "push": "Buying peace on credit"
      }
    ]
  },
  {
    "id": "arrival",
    "pack": "frontline",
    "title": "The Nine Buses",
    "role": "You are the mayor of Halden Falls, population 61,000.",
    "setting": "Over three weeks, nine chartered buses from the state capital have brought 900 asylum seekers to your town — legally present, work permits pending in an eight-month federal backlog. The shelters filled in four days. Winter arrives in six weeks. The state promises reimbursement; the paperwork remains unsigned. Your town did not ask for this. Neither did the people on the buses.",
    "question": "Six weeks to frost. What does Halden Falls become?",
    "listenIntro": "You have time for THREE meetings before the council session. The rallies are loud. The spreadsheets and the people sleeping in the church basement are not.",
    "stakeholders": [
      {
        "id": "ruth",
        "name": "Pastor Ruth Okonkwo",
        "role": "Shelter coalition",
        "loud": true,
        "teaser": "“We are out of floor. I am not speaking metaphorically.”",
        "insight": "“Every church basement in this town is full. My volunteers are sleeping four hours a night. I don't need a debate about federal policy — I need heated square footage before the first frost, and the rec center has it. History will remember what this town did in these six weeks. So will God, but take whichever motivates the council.”"
      },
      {
        "id": "dan",
        "name": "Dan Kowalski",
        "role": "Residents' association",
        "loud": true,
        "teaser": "He's brought a petition with 4,000 signatures — and hospital paperwork.",
        "insight": "“Before you file me under 'angry mob' — my daughter waited nine hours at the ER on Tuesday. Clinic waits have doubled. We're 61,000 people absorbing a decision made in the capital by people who will never meet anyone on those buses. I'm not asking you for cruelty. I'm asking for a number and a plan, because 'as many as needed' is not a plan.”"
      },
      {
        "id": "vega",
        "name": "Superintendent Vega",
        "role": "School district",
        "loud": false,
        "teaser": "Her enrollment memo is three pages of arithmetic. Arithmetic doesn't rally.",
        "insight": "“There are 140 school-age children in that group, and the law says I seat every one of them Monday morning — which I will, gladly. But per-pupil state funding lags enrollment by a full year. I'm buying this year's teachers with last year's headcount. Nobody at either rally is chanting about my staffing formula.”"
      },
      {
        "id": "amira",
        "name": "Amira",
        "role": "Asylum seeker, former ICU nurse",
        "loud": false,
        "teaser": "She's been translating for other families all week. Nobody has asked her anything.",
        "insight": "“In my country I ran an intensive care unit. Here I am forbidden to work for eight more months while a clinic two streets away posts nursing vacancies. Everyone argues about what we cost. Almost no one asks what we're being prevented from contributing. I don't want your charity. I want your permission slip.”"
      },
      {
        "id": "barros",
        "name": "Chief Barros",
        "role": "Police department",
        "loud": false,
        "teaser": "“Can I show you the actual numbers before you read the comments section?”",
        "insight": "“Incidents involving the new arrivals: statistically flat — lower than the town average, if you want the truth. What's killing me is overtime for rumor control and rally security, and a viral video from another state that everyone thinks happened here. I police reality. I'm losing to fiction.”"
      },
      {
        "id": "chen",
        "name": "Budget Officer Chen",
        "role": "Town finance",
        "loud": false,
        "teaser": "She's run the reimbursement history back ten years. It's not encouraging.",
        "insight": "“Our reserves cover roughly ten weeks of full shelter operations. Historical state reimbursement for emergency mandates: about 60 cents on the dollar, arriving fourteen months late. Whatever the council's heart says, I need it to also read this table, because compassion written in ink we don't have is a check that bounces on someone.”"
      }
    ],
    "pressure": {
      "from": "STATE HOUSE — WIRE ALERT",
      "text": "The state has frozen all emergency reimbursements 'pending audit' — indefinitely. Meanwhile a 40-second video of a scuffle near the rec center is going viral statewide; it's out of context, and it doesn't matter. Two rallies have filed permits for the same square, the same morning: one demanding the shelters close, one demanding they expand. Both organizers have invited news crews. Both have invited you.",
      "note": "The money just became hypothetical. The anger just became certain. The 140 kids still start school Monday."
    },
    "decisionPrompt": "The council session opens. Winter doesn't wait for the audit. What is your order?",
    "decisions": [
      {
        "id": "A",
        "title": "Open the rec center — shelter them all",
        "body": "Convert the rec center into full emergency shelter with services, funded from reserves, betting the state eventually pays. Nobody sleeps outside in Halden Falls. Not this winter.",
        "pushes": [
          "Betting the reserves on an unsigned promise",
          "Governing for the rally that cheers you"
        ],
        "anchors": [
          "No one freezes in a town with heated buildings"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“HALDEN FALLS SHOWS THE COUNTRY ITS SOUL — Every family sheltered before the frost. One small town just out-governed the entire state.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“MAYOR SPENDS THE RESERVES ON A FROZEN PROMISE — Residents' clinic waits double while the capital applauds a town it bankrupted by bus.”"
        },
        "later": "EIGHTEEN MONTHS LATER — The state reimbursed 55 cents on the dollar, sixteen months late; the road bond was delayed to cover the gap, and Kowalski's slate won three council seats saying so. Also true: all 140 kids are enrolled, no one froze, and Amira — permit finally granted — now works at the very clinic whose wait times fueled the petition. She staffed the shortage everyone was arguing about. Both rallies were describing the same town."
      },
      {
        "id": "B",
        "title": "Managed intake — a cap with a system",
        "body": "Shelter 350 — the number Chen and Vega confirm services can hold — negotiate binding transfer agreements with four nearby cities and the state for the rest, and open a legal clinic to attack the work-permit backlog so people can support themselves.",
        "pushes": [],
        "anchors": [
          "Capacity honesty over capacity theater",
          "Burden-sharing beats burden-shifting",
          "A permit is worth ten cots"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“MAYOR PUTS A NUMBER ON COMPASSION — 550 human beings become 'transfers.' Ask them how managed it feels from inside a bus.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“FINALLY, A PLAN INSTEAD OF A POSE — Intake matched to actual capacity, four cities sharing the load, and a clinic that turns dependents into workers.”"
        },
        "later": "EIGHTEEN MONTHS LATER — The cap held and six towns copied the model; the permit clinic cut waits from eight months to three, and 60 of the 350 now work locally. Also true: transfers stalled for 250 people who dispersed to counties with no system at all — some landed worse than if you'd never counted. Pastor Ruth hasn't spoken to you since. Dan Kowalski does, which you notice means something different than it used to."
      },
      {
        "id": "C",
        "title": "Refuse the role — force it back on the state",
        "body": "Decline municipal shelter operations. Fund onward transport, legal aid, and coordination — and publicly declare this a state-manufactured crisis that a town of 61,000 will not be made to absorb in silence.",
        "pushes": [
          "Passing the coat in winter",
          "The relief of a smaller problem"
        ],
        "anchors": [
          "Accountability lands where the decision was made"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“HALDEN FALLS BUYS BUS TICKETS INSTEAD OF BLANKETS — The mayor's 'principled stand' has a wind-chill factor.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“MAYOR REFUSES TO LET THE STATE DUMP ITS FAILURE ON A SMALL TOWN — Someone finally sent the bill back to the people who wrote it.”"
        },
        "later": "EIGHTEEN MONTHS LATER — The state took five weeks to respond; in week three, two families slept in cars and one hospitalization carried your name into national news. In month two, the state opened the regional intake center your refusal arguably forced into existence — it now serves four counties, and towns quietly thank you. The reserves are intact. Your town's name means two different things now, depending on who's saying it, and both of them are about you."
      }
    ],
    "heatPrompt": "The morning of the two rallies, you walk into the square — both crowds, one microphone. What do you say?",
    "heats": [
      {
        "id": "blame",
        "title": "Point at the capital",
        "body": "“Take it up with the state. They sent the buses, they froze the money. I'm just the mayor.”",
        "verdict": "Both crowds actually agree with you for eleven seconds — a record. Then someone shouts 'so what are YOU going to do?' and you realize blame, however accurate, is not a plan, and everyone in the square knows it.",
        "push": "Accurate blame, absent leadership"
      },
      {
        "id": "anchor",
        "title": "Name your anchor to both crowds",
        "body": "“Half of you think I did too much, half think I did too little — which means you deserve to know exactly how I decided. I weighed the people on those buses AND the people at that clinic, the reserves we actually hold, and the winter that doesn't check permits. Here is my line, hold me to it: no one freezes, no one's ER wait becomes permanent, and no one gets to be a rumor instead of a neighbor.”",
        "verdict": "Neither crowd cheers. But both crowds listen — and afterward, the two organizers are photographed talking to each other, which the Ledger and the Tribune both print, with different captions.",
        "anchor": "One message for every room"
      },
      {
        "id": "appease",
        "title": "Tell each crowd what it came for",
        "body": "You angle toward each side in turn: reassurances of firmness for one, promises of expansion for the other, hoping the clips don't meet.",
        "verdict": "The clips meet by lunchtime, edited side by side. The story is no longer immigration. The story is you.",
        "push": "The two-faced microphone"
      }
    ]
  },
  {
    "id": "sirens",
    "pack": "frontline",
    "title": "The Two Sirens",
    "role": "You chair the public-safety committee of Veradale.",
    "setting": "Two facts, both true, neither canceling the other: violent crime downtown is up 18% in two years, and 911 response times have slid from 14 minutes to 22 — the force is 60 officers short. And three weeks ago, officers responding to a mental-health call injured an unarmed man in crisis; the video is everywhere; his mother has not missed a council session since. Tonight you allocate a one-time $10 million public-safety increment.",
    "question": "Two sirens, one budget. Which one do you answer — and what do you tell the other?",
    "listenIntro": "You have time for THREE meetings before the vote. The union and the family are already at your door. The data, the ER, and the barbershop are not.",
    "stakeholders": [
      {
        "id": "reyes",
        "name": "Sgt. Marisol Reyes",
        "role": "Police union president",
        "loud": true,
        "teaser": "“Sixty vacancies. Mandatory double shifts. Ask me anything.”",
        "insight": "“My members are working sixteen-hour doubles and you want to know why de-escalation fails at hour fifteen? You cannot reform an empty precinct. Every plan that doesn't start with bodies in uniforms is a speech, and the response-time clock doesn't listen to speeches.” She's exhausted too. It shows."
      },
      {
        "id": "denise",
        "name": "Denise Carter",
        "role": "Mother of the injured man",
        "loud": true,
        "teaser": "She sits in the same seat every session, holding the same photograph.",
        "insight": "“My son called 911 himself. He asked for help and help is what broke his shoulder in the driveway of the house he grew up in. I'm not against police — I'm against sending a hammer when someone dials for a doctor. My question is one sentence: when the next mother's son calls, who do you plan to send?”"
      },
      {
        "id": "whitmore",
        "name": "Dr. Whitmore",
        "role": "Crime analyst",
        "loud": false,
        "teaser": "Her briefing deck has 40 slides. Attendance at her briefings: two people.",
        "insight": "“Three things the shouting hides: 62% of our 911 growth is mental-health and disorder calls, not violence. The violence itself is concentrated in four micro-zones covering 5% of the city. And the strongest evidence we have is boring — lighting, targeted patrol, violence interruption in exactly those zones. The data has a shape. The budget should have the same shape.”"
      },
      {
        "id": "tomas",
        "name": "Tomas",
        "role": "ER trauma nurse",
        "loud": false,
        "teaser": "“I treat everyone in this argument. They arrive on the same gurneys.”",
        "insight": "“Tuesday I treated a gunshot victim from the Fourth Street zone, an officer with a stress cardiac event, and a man in psychosis who waited nine hours for a psych bed that doesn't exist. From where I stand there's no debate — there's one broken pipeline, and everyone in it is bleeding from a different section.”"
      },
      {
        "id": "marcus",
        "name": "Marcus Bell",
        "role": "Barber, downtown",
        "loud": false,
        "teaser": "Thirty years on Fourth Street. He refuses to join either march.",
        "insight": "“My regulars are scared to come after dark — I want police on this block, real ones, walking. My nephew also got slammed on a wall for matching a description. People keep asking me to pick a team. Safety AND respect — why is that two teams? On this street it's just Tuesday.”"
      },
      {
        "id": "kim",
        "name": "Officer Dana Kim",
        "role": "Patrol, 19 years",
        "loud": false,
        "teaser": "She asked to meet away from the precinct. Veterans don't do that lightly.",
        "insight": "“Off the record: a hiring surge without fixing why people leave just manufactures exhausted rookies — and exhausted rookies are how you get more videos. What would actually change my shift? Someone else taking the 3 a.m. crisis calls I was never trained for. I became a cop to stop violence, not to be the city's only social worker with a gun.”"
      }
    ],
    "pressure": {
      "from": "DISPATCH — PRIORITY / COUNCIL SECURITY",
      "text": "A shooting, two blocks from these chambers, eleven minutes ago — inside one of Dr. Whitmore's four zones. The march outside has swelled and turned toward the building. Sgt. Reyes has just announced the union will hold a no-confidence vote on this committee if the funds don't go to hiring. Denise Carter has not moved from her seat. Both sirens are now audible from the dais. Literally.",
      "note": "The tragedy is real. The intimidation is also real. They arrived in the same minute, and neither one is data."
    },
    "decisionPrompt": "The vote is called. Ten million dollars. What does Veradale buy?",
    "decisions": [
      {
        "id": "A",
        "title": "The hiring surge",
        "body": "40 new officers, retention bonuses, overtime relief. Fill the vacancies, fix the response clock, and let a fully staffed force be the platform every other reform stands on.",
        "pushes": [
          "Answering only the loudest siren",
          "Union brinkmanship worked"
        ],
        "anchors": [
          "An empty precinct protects no one"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“A CRISIS OF TRUST, ANSWERED WITH MORE OF THE SAME — Not one dollar for the calls that actually broke this open. Denise Carter's question is still on the table.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“COUNCIL FINALLY BACKS THE BADGE — Response times, not slogans. You can't de-escalate a 911 call that nobody answers.”"
        },
        "later": "TWO YEARS LATER — Response times: down to 17 minutes; downtown robberies down 9%. The academy pipeline ran slower than the press release — 26 hired, not 40 — and crisis calls still land on patrol, where Officer Kim predicted what that yields: another incident, year two. This one ended safely — bodycam, a sergeant with new de-escalation training, luck. Which lesson Veradale takes from that depends, as ever, on the paper."
      },
      {
        "id": "B",
        "title": "The portfolio — shape the budget like the data",
        "body": "Clinician co-responder teams for crisis calls citywide; violence interruption plus lighting and 12 targeted officers in the four hot zones; retention money for the force you already have. Both sirens get answered — neither gets everything.",
        "pushes": [],
        "anchors": [
          "Match the response to the call",
          "The four blocks where it actually happens",
          "Both sirens are real"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“A COUNCIL THAT LISTENED TWICE — Crisis calls get clinicians, hot blocks get light and presence. Imperfect, and the first honest budget in years.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“A LITTLE OF EVERYTHING, ENOUGH OF NOTHING? — Twelve officers against sixty vacancies, and the union's no-confidence vote says the math out loud.”"
        },
        "later": "TWO YEARS LATER — Co-responders took 9,000 calls with zero serious injuries on any of them; shootings in the four zones fell 24%. The union's no-confidence vote passed anyway and the chief resigned; citywide response times barely moved, because the vacancies were never filled — the critics were right about that. Both papers ran anniversary retrospectives claiming vindication. Both quoted Marcus Bell. He'd said the same sentence to each."
      },
      {
        "id": "C",
        "title": "Legitimacy first",
        "body": "An oversight board with subpoena power, a training overhaul, cameras and street lighting citywide. No new headcount — the argument being that trust is the infrastructure every officer stands on, and it's the thing currently on fire.",
        "pushes": [
          "Governing for the cameras",
          "Deferring the vacancy arithmetic"
        ],
        "anchors": [
          "Legitimacy is a public-safety tool"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“COUNCIL TREATS TRUST AS INFRASTRUCTURE — The first public-safety budget in memory that starts with the people being policed.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“NOT ONE NEW OFFICER — Council funds paperwork and committees while 911 callers listen to hold music. Ask the next victim how the subpoena power worked out.”"
        },
        "later": "TWO YEARS LATER — The oversight board seated after fourteen months of litigation; complaint rates fell and, for the first time in a decade, surveyed trust in police rose in every district — including among officers, which no one predicted. Response times slid to 25 minutes, and one high-profile unsolved case became the attack ad that nearly ended your career. The lighting quietly cut burglaries 12%. Nobody has ever chanted about lighting."
      }
    ],
    "heatPrompt": "Tomorrow, 7 a.m.: you address precinct roll call — and Denise Carter is in the front row, because you invited her. One room. Both sirens. Go.",
    "heats": [
      {
        "id": "blame",
        "title": "Hide behind the data",
        "body": "“Look — the numbers made this decision, not me. Take it up with the analysts.”",
        "verdict": "Dr. Whitmore's forty slides took no vote and signed no budget. The room hears a leader outsourcing a choice to a spreadsheet, and both the officers and Mrs. Carter conclude the same thing: nobody is actually steering.",
        "push": "Hiding behind the spreadsheet"
      },
      {
        "id": "honest",
        "title": "Say the whole thing to the whole room",
        "body": "“Sergeant, your people are carrying too much — that's true, and this budget doesn't fully fix it. Mrs. Carter, your son called for help and got hurt — that's true, and no line item undoes it. I made a call that leaves both of you partly unsatisfied, and I'll tell you exactly why, because you'll be living in it together long after I'm gone. Ask me anything, in front of each other.”",
        "verdict": "Silence — the working kind. Afterward, Reyes and Carter don't shake hands. But they leave through the same door, still talking, and Officer Kim tells you later that roll call has never once, in nineteen years, been that quiet.",
        "anchor": "Both truths, out loud, same room"
      },
      {
        "id": "appease",
        "title": "Promise each side its missing piece",
        "body": "“The hiring money is coming next cycle, I promise — and Mrs. Carter, so is the full crisis system. Everyone gets there.”",
        "verdict": "Next cycle's budget is already spoken for, and the union's accountant knows it before you finish the sentence. You've converted two groups who distrusted each other into two groups who jointly distrust you. It is, technically, unity.",
        "push": "Peace on layaway"
      }
    ]
  },
  {
    "id": "arithmetic",
    "pack": "frontline",
    "title": "The Arithmetic of a Promise",
    "role": "You chair the school board of Marrow County.",
    "setting": "Enrollment has fallen for nine straight years; the state funding formula just changed; the district faces an $18 million structural shortfall. Half your buildings run below 45% capacity and cost the same to heat either way. Teacher pay already trails the region by 12%. The counselor ratio is 1 to 480. Every option on tonight's agenda breaks a promise someone was made.",
    "question": "Which promise do you break on purpose — before the arithmetic breaks all of them for you?",
    "listenIntro": "You have time for THREE meetings before the board votes. The gym will be packed either way. Some of the people who matter most won't be in it.",
    "stakeholders": [
      {
        "id": "gail",
        "name": "Gail Osei",
        "role": "Teachers' union president",
        "loud": true,
        "teaser": "“I've got 74 resignation-ready teachers in a folder. Want to see it?”",
        "insight": "“We're 12% under the region and you're debating which of us to cut. Every teacher who crosses the county line takes a classroom's worth of stability with them. You can close buildings or trim sports — but if this budget touches pay or headcount, the shortage you create will cost triple what it saves. I've watched three boards learn that the expensive way.”"
      },
      {
        "id": "trish",
        "name": "Trish Alvarado",
        "role": "Lincoln Elementary parents",
        "loud": true,
        "teaser": "Her flyer reads: 'A NEIGHBORHOOD WITHOUT A SCHOOL IS A PARKING LOT.'",
        "insight": "“Lincoln is the only school that ever worked for our side of town — scores up three years straight, teachers who know every kid's name. Your consolidation map puts six-year-olds on a 50-minute bus to a building with triple the class size. You call it a facilities decision. From our porch it looks like the district deciding, again, which neighborhood is optional.”"
      },
      {
        "id": "ahn",
        "name": "CFO Ahn",
        "role": "District finance",
        "loud": false,
        "teaser": "His model has no adjectives in it. That's rather the point.",
        "insight": "“The arithmetic, without seasoning: closing two buildings saves $6.2M a year, recurring, forever. Program cuts save $7M once, then the deficit returns wearing a bigger coat. A levy raises $9M — if it passes, and the last two didn't. I don't get a vote, but I'll say this: one-time answers to recurring problems are how we got here.”"
      },
      {
        "id": "jayla",
        "name": "Jayla",
        "role": "Student board representative",
        "loud": false,
        "teaser": "She has a seat at the table and, technically, no vote. She counted.",
        "insight": "“Adults fight about buildings and salaries because those have addresses and names. You know what's invisible? The counselor line. It's 1-to-480 now; I waited three weeks in October, and I'm the student who knows how to ask. Whatever you cut, I'm asking you to say out loud which kids feel it, because from this seat, 'across the board' always lands on the same people.”"
      },
      {
        "id": "frank",
        "name": "Frank Novak",
        "role": "Retired homeowner",
        "loud": false,
        "teaser": "He's not at the rallies. He's at his kitchen table with a calculator.",
        "insight": "“I taught shop in this district for 31 years, so don't file me under 'hates kids.' My property tax is up 30% in a decade and my pension is not. A levy without a senior exemption doesn't tax my house — it taxes whether I can keep it. Write the exemption in, and I'll knock doors for you myself. I've still got the shoes.”"
      },
      {
        "id": "torres",
        "name": "Principal Torres",
        "role": "Lincoln Elementary",
        "loud": false,
        "teaser": "She asked to see you privately — and brought two folders, not one.",
        "insight": "“Folder one: three years of rising scores, the attendance turnaround, the mentoring program — everything Lincoln is. Folder two, which Trish hasn't seen: the $4M roof estimate and the boiler that won't pass inspection twice more. I will fight for this school with everything I have. You deserved to fight with the whole truth in the room.”"
      }
    ],
    "pressure": {
      "from": "STATE CAPITOL + DISTRICT LEAK — SAME HOUR",
      "text": "The state just announced a mid-year aid clawback: another $3 million, effective immediately. And a draft consolidation memo — an early version, with a closure list the board never approved — has leaked to social media. Four hundred people are now in the gym. Parents are reading the wrong list aloud through a megaphone. Gail's members are filing in wearing red. Frank Novak, improbably, is also here.",
      "note": "The hole just got deeper and the trust just got thinner, in the same hour. The vote is still tonight."
    },
    "decisionPrompt": "The gym quiets, barely. Eighteen million dollars short, plus three. What does the board do?",
    "decisions": [
      {
        "id": "A",
        "title": "Close and consolidate",
        "body": "Close two under-enrolled buildings, including Lincoln. Reinvest the recurring savings in teacher pay, counselors, and transport. Solve the structural problem structurally — and own what it costs one neighborhood.",
        "pushes": [
          "The spreadsheet can't see a walking distance"
        ],
        "anchors": [
          "Recurring problems need recurring answers",
          "Solvency is a promise to every student"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“BOARD CLOSES THE ONE SCHOOL THAT WAS WORKING — Efficiency finds the poorest neighborhood first. It always seems to know the way.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“A BOARD THAT CAN COUNT — Half-empty buildings finally consolidated; the savings go to teachers and counselors instead of boilers. Arithmetic wins one.”"
        },
        "later": "THREE YEARS LATER — The savings were real and recurring: pay gap closed to 4%, counselor ratio down to 1-to-310 — Jayla's line, though she'd graduated by then. Lincoln's kids dipped academically in year one and recovered by year two, except one fifth-grade cohort that never quite did; nobody's dashboard has a column for that. The building became a health clinic — the neighborhood gained a doctor and lost its 3 p.m. heartbeat. Torres runs the consolidated school now. Every June, she does the math both ways, and it comes out different depending on which folder she opens first."
      },
      {
        "id": "B",
        "title": "Cut programs, keep every door open",
        "body": "Trim arts, athletics, counselors, and electives across every school. No building closes, no neighborhood is singled out, and the whole district shares a thinner year — or several.",
        "pushes": [
          "Spreading pain to avoid a fight",
          "The invisible cut — the one Jayla named"
        ],
        "anchors": [
          "No neighborhood is optional"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“EVERY SCHOOL STAYS OPEN — Board refuses to sacrifice a neighborhood and asks the whole district to carry the weight together.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“DEATH BY A THOUSAND CUTS — Board guts counselors and music to dodge one hard vote. The deficit will be back; the cello program won't.”"
        },
        "later": "THREE YEARS LATER — Every door stayed open, and it mattered: Lincoln's scores kept climbing, and no neighborhood got a parking lot. Also: 31 teachers crossed the county line anyway — Gail's folder, proven right — and the counselor ratio hit 1-to-610 the same winter the deficit returned, wearing the bigger coat Ahn predicted. A volunteer coalition saved the music program, which the Ledger printed as proof that community works, and the Tribune printed as proof of what the board abandoned. Same concert. Same third-graders. Two reviews."
      },
      {
        "id": "C",
        "title": "Put it to the voters — the levy",
        "body": "Draft a levy with Frank's senior exemption written in, bridge this year with a loan, and put the real price of the district on the ballot. If the county says no, next year's cuts go deeper — and everyone will have chosen them.",
        "pushes": [
          "Deferring the decision you were elected to make",
          "Betting the counselors on a coin flip"
        ],
        "anchors": [
          "The bill goes to the people, itemized",
          "Honesty about what schools cost"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“BOARD PUTS DEMOCRACY ON THE BALLOT — And children's counselors on a coin flip. Courage, or a very public shrug?”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“BOARD ASKS FOR A BLANK CHECK INSTEAD OF A DECISION — Can't manage the budget you have? Request a bigger one. The bridge loan's interest is due either way.”"
        },
        "later": "THREE YEARS LATER — The first levy failed 48–52, and the bridge loan cost $840,000 in interest — a number your opponents laminated. The rewritten levy, with Frank's exemption and an itemized bill, passed 55–45 a year later; he knocked 400 doors, as promised. The district is now the only fully funded one in the region. You lost your seat in the year between the two votes, and watched the vindication from the audience, which is where, you've noticed, most vindication is watched from."
      }
    ],
    "heatPrompt": "The vote is cast. Four hundred people in the gym are waiting, and the megaphone is being handed to you. First words.",
    "heats": [
      {
        "id": "blame",
        "title": "Blame the formula",
        "body": "“The state changed the formula. The capitol did this, not this board. Direct your anger there.”",
        "verdict": "You're not wrong, and the gym knows you're not wrong — the clawback is real. But they elected you to govern inside the formula, not to narrate it. 'It's the state's fault' and 'we have a plan' are different sentences, and tonight you only said one of them.",
        "push": "Accurate blame, absent plan"
      },
      {
        "id": "honest",
        "title": "Read out the arithmetic and your anchor",
        "body": "“Here is the whole board packet — every number, on the district site tonight, nothing redacted. Here is the promise we chose to break, and the promises we broke it to keep. And here is the standard I ask you to hold us to: every dollar this decision frees will be traceable to a classroom, publicly, every quarter. Check my math. Please. That's not rhetoric — the spreadsheet has a comment column.”",
        "verdict": "Someone actually does check the math — a retired accountant, row nine, and she finds a $200k error, which you correct and credit her for publicly. Strangely, that lands better than a perfect spreadsheet ever could have: a board that can be checked is a board that can be trusted.",
        "anchor": "Show the arithmetic, take the questions"
      },
      {
        "id": "appease",
        "title": "Promise it all back",
        "body": "“These cuts are temporary — everything comes back as soon as revenues recover. Two years, maybe three, tops.”",
        "verdict": "Revenues have declined for nine consecutive years, and everyone in the gym holding a district paycheck knows the trend line. The applause is thin and it is brief, and it is the last benefit of the doubt this room will extend to you.",
        "push": "The restoration mirage"
      }
    ]
  },
  {
    "id": "verdon",
    "pack": "hardground",
    "title": "The Shelter on Verdon Street",
    "role": "You are the Deputy Mayor for Housing.",
    "setting": "Three people froze to death downtown last winter. A federal grant will fund a 90-bed low-barrier shelter — but it expires in 60 days, and the only code-ready building the city owns is a former convent on Verdon Street, a modest residential block that already absorbed a methadone clinic six years ago, after the city promised the neighborhood it was 'done carrying the city's weight.'",
    "question": "Sixty days to a cold snap. Where does the city put other people's suffering?",
    "listenIntro": "You have time for THREE conversations before the public meeting. The angry are organized. The dying are not in the room — someone has to speak for them, and someone has to speak for the street that keeps being asked.",
    "stakeholders": [
      {
        "id": "nadia",
        "name": "Nadia Ferro",
        "role": "Verdon residents' association",
        "loud": true,
        "teaser": "She voted FOR the shelter levy. She's brought photographs, and the minutes.",
        "insight": "She's no caricature. She lays out photos of needles in the churchyard from the clinic's first year, and the minutes of the meeting where the city made its promise. “Why is it always this street, and never the streets where councilmembers live? I'm not asking you to abandon those people. I'm asking why my block is the answer every single time.”"
      },
      {
        "id": "okafor",
        "name": "Rev. Thomas Okafor",
        "role": "Winter warming van",
        "loud": true,
        "teaser": "He knew all three who died last winter. By name.",
        "insight": "“A low-barrier shelter is the only kind the people outside will actually walk into. The sobriety-required beds across town sit half-empty while people freeze three blocks away. Tell me which of the names I buried could have waited for a better process.”"
      },
      {
        "id": "marcus",
        "name": "Marcus Hale",
        "role": "Peer counselor, formerly homeless",
        "loud": false,
        "teaser": "He complicates both sides, which is why nobody's quoting him.",
        "insight": "“A shelter saved my life. A badly run one also robbed and beat me — same year. So spare me the map fight: placement matters less than staffing ratios, and this grant underfunds them. Site it anywhere you like; if there's one worker for ninety beds at 3 a.m., you've built the thing that hurt me.”"
      },
      {
        "id": "liaison",
        "name": "Officer Reyes",
        "role": "Police liaison",
        "loud": false,
        "teaser": "She brought the actual calls-for-service data. Data doesn't testify at meetings.",
        "insight": "“Around the clinic, calls spiked hard in year one, then fell below the neighborhood baseline by year three. I'll say both halves out loud, because Nadia's people lived year one and no chart erases that. The fear isn't irrational. It's just also not the whole graph.”"
      },
      {
        "id": "attorney",
        "name": "City Attorney Boll",
        "role": "Legal",
        "loud": false,
        "teaser": "“Before you fall in love with the industrial-zone option, read this.”",
        "insight": "“The industrial site fails two grant requirements — transit access and proximity to services — and invites a fair-housing suit. Concentrating services far from where people can actually reach them is its own kind of discrimination. 'Out of sight' is not a legal safe harbor. It's often the opposite.”"
      }
    ],
    "pressure": {
      "from": "PUBLIC MEETING — LEAKED",
      "text": "A councilmember has leaked your internal memo — the one listing Verdon as the 'path of least political resistance.' Nadia's association just read it aloud, word for word, into the microphone. The room turned. The ten-day forecast shows a hard cold snap arriving in three weeks, and every camera in the room now has the phrase 'least resistance' in its notes.",
      "note": "Your own words are being read back to you. Notice how much harder it is to choose Verdon now — and whether that's conscience or just exposure."
    },
    "decisionPrompt": "Three weeks to the freeze. The grant expires in sixty days. Where do the ninety beds go?",
    "decisions": [
      {
        "id": "A",
        "title": "Site it on Verdon — with a binding compact",
        "body": "Put the shelter on Verdon, but attach a community compact with teeth: staffing minimums, a 24-hour response line, a resident seat on the oversight board, and a mandatory sunset review at eighteen months.",
        "pushes": [
          "The leak turned siting into self-defense",
          "The cold-snap clock"
        ],
        "anchors": [
          "The most exposed can't wait for a better address",
          "Oversight power, not just promises"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“NINETY BEDS BEFORE THE FREEZE — City chooses the living over the comfortable, and hands residents oversight power no siting deal has ever included.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“CITY DUMPS ON VERDON — AGAIN — A working-class street told to absorb what wealthier districts refused. The memo said the quiet part: 'path of least resistance.'”"
        },
        "later": "TWO YEARS LATER — Calls spiked, then fell, tracking the clinic's old curve almost exactly. Two Verdon residents now work at the shelter. Nadia never stopped opposing it — and her presence at every oversight meeting is the single reason the staffing minimums held when the budget got tight. One overdose death inside the shelter made the news. The winter deaths that didn't happen made no news at all. That asymmetry is the whole job."
      },
      {
        "id": "B",
        "title": "Decline the building — go dispersed",
        "body": "Refuse Verdon. Pursue five micro-shelters of 15–20 beds across five neighborhoods. Lose this grant; reapply next cycle. The beds arrive a year later — after this winter.",
        "pushes": [
          "Choosing the defensible plan over the reachable bed"
        ],
        "anchors": [
          "No neighborhood is the city's permanent dumping ground",
          "Shared load beats concentrated load"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“A CITY THAT KEEPS ITS WORD — Verdon's promise honored, five neighborhoods to share the weight. Advocates call it the first honest siting plan in a decade.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“COUNCIL CHOOSES PROCESS OVER PEOPLE — Beds delayed a year, grant money returned to Washington. The warming-van pastor asks which of his people were supposed to wait.”"
        },
        "later": "TWO YEARS LATER — The grant was lost. One micro-shelter opened late the following year; two people died in the winter in between, and Rev. Okafor read their names at a council meeting you attended. In year three, the dispersed model was written up as a national template and three other cities adopted it. Both things are true, and they don't cancel — they just have to be carried at the same time, which is heavier than either one alone."
      },
      {
        "id": "C",
        "title": "Site it in the industrial corridor",
        "body": "Open the beds on time, away from the school route — and away from the bus lines, clinics, and jobs the people inside will need to rebuild. Accept the fair-housing lawsuit risk.",
        "pushes": [
          "'Out of sight' as the path of least conflict",
          "The relief of a quieter map"
        ],
        "anchors": [
          "Beds on time before the freeze"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“OUT OF SIGHT, OUT OF REACH — Shelter sited two bus transfers from the nearest clinic. Peer counselors call it 'a warehouse with cots.'”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“A WORKABLE COMPROMISE — Beds open on schedule without breaking faith with a neighborhood. Families along the school route say they were finally heard.”"
        },
        "later": "TWO YEARS LATER — The suit settled with a mandated shuttle that runs half-empty. Occupancy stalled at 60% — the people who most needed the beds couldn't reach the services that make beds into recovery. The downtown encampment persists. Verdon is quiet, and grateful, and its gratitude is real. Nobody is furious. Nobody is helped as much as they could have been. It is the outcome that generates the fewest phone calls and the fewest recoveries at the same time."
      }
    ],
    "heatPrompt": "After the meeting, Nadia catches you alone. She read the memo. What do you say?",
    "heats": [
      {
        "id": "blame",
        "title": "Cite the constraints",
        "body": "“The grant rules, the code requirements, the timeline — Verdon was the only building that qualified. My hands were tied.”",
        "verdict": "Maybe every word is true. But she asked you a moral question and you handed her a logistics answer, and she heard the swap. 'The rules chose your street' is not a thing a person can be governed by twice.",
        "push": "Hiding a value behind a constraint"
      },
      {
        "id": "honest",
        "title": "Answer the question she actually asked",
        "body": "“You're right about the memo — that sentence was real, and it should shame me, and it does. Here's the honest difference I can offer, and you can hold me to it: this is the first time the paper doesn't just promise you something, it gives you a seat, a sunset date, and a staffing floor you can enforce when I'm gone. I won't insult you by pretending the pattern isn't the pattern. I'll only ask you to judge whether this is the version that finally breaks it.”",
        "verdict": "She doesn't thank you — you haven't earned that, and you both know it. But she stops filming, and she stays in the room, and two years later she is still in the room, which turns out to be the difference between a promise and a fact.",
        "anchor": "Name the pattern instead of denying it"
      },
      {
        "id": "appease",
        "title": "Promise it won't happen again",
        "body": "“I give you my word — this is the last time Verdon carries anything. Next facility goes uptown, I'll see to it personally.”",
        "verdict": "You don't control the next siting decision and she's watched enough deputy mayors to know it. The promise doesn't reassure her; it just tells her exactly how much your word is worth, which is a strange thing to volunteer.",
        "push": "The promise you can't underwrite"
      }
    ]
  },
  {
    "id": "surgeon",
    "pack": "hardground",
    "title": "The Surgeon's Hands",
    "role": "You are the Chief Medical Officer.",
    "setting": "Dr. Elias Roth, 68, built this hospital's cardiac program and trained half its surgeons. In eighteen months: two unexpected returns to theater — above his own historical rate, within the department's range. Then a resident quietly reports seeing his right hand tremor while suturing. Once. At the end of a nine-hour case. Peer review: inconclusive. His overall outcomes stay above the national average — because he takes the hardest cases, or because the average is hiding the start of a decline. The new wing bears his name.",
    "question": "What do you owe the man in front of you, against the patient you'll never meet?",
    "listenIntro": "You have time for THREE conversations before the story breaks. Everyone has an interest. The trick is that the self-interested people are sometimes also right.",
    "stakeholders": [
      {
        "id": "roth",
        "name": "Dr. Elias Roth",
        "role": "The surgeon",
        "loud": true,
        "teaser": "He doesn't beg. He brings his simulator scores.",
        "insight": "The scores are excellent — though simulators don't run nine hours. “Who operates on the 3 a.m. aortic dissections if I'm out? Answer honestly.” The honest answer is a transfer helicopter to a city two hundred miles away, and he knows you know it. He is not bluffing. He is also not necessarily still the surgeon he was."
      },
      {
        "id": "resident",
        "name": "Dr. Pham",
        "role": "The resident who reported",
        "loud": true,
        "teaser": "Terrified. Second-guessing herself out loud.",
        "insight": "She keeps circling back to whether she imagined it, then stops circling and says the thing that lodges under your ribs: “If it were my father on the table, and I'd seen what I saw, and said nothing — I couldn't live in that. So I said it. Even though it might be nothing. Even though it might cost me.”"
      },
      {
        "id": "counsel",
        "name": "Counsel Weiss",
        "role": "Hospital legal",
        "loud": false,
        "teaser": "“Liability cuts both ways here, and I need you to sit with both.”",
        "insight": "“Keep him and something happens on the table: catastrophic, and foreseeable, and documented that you knew. Remove him without formal findings: an age-discrimination suit he probably wins, because a single reported tremor and an above-average record is not a case. There is no clean door. Choose which lawsuit you'd rather defend, because you're choosing one.”"
      },
      {
        "id": "nurse",
        "name": "Nurse Adeyemi",
        "role": "Senior OR nurse, 20 years",
        "loud": false,
        "teaser": "Nurses always know first. Getting her on record is another matter.",
        "insight": "On the record: nothing. Off the record, after a long look at the door: “He's still better than most surgeons in this building. He is not better than he was three years ago. Both of those are true, and I've watched every hour of it, and I will deny saying it.”"
      },
      {
        "id": "younger",
        "name": "Dr. Cole",
        "role": "Younger cardiac surgeon",
        "loud": false,
        "teaser": "His analysis of Roth's last three years is rigorous. He's also next in line.",
        "insight": "The data he's assembled is genuinely damning around the edges — and he is the obvious successor as chief of cardiac surgery. “I know how this looks coming from me. Read the numbers anyway, and then discount them for my ambition, and then notice they're still there after you discount them.” The analysis is honest and self-serving. Both facts are load-bearing."
      }
    ],
    "pressure": {
      "from": "PRESS DESK — 48 HOURS",
      "text": "A journalist calls: someone has tipped them about 'concerns regarding a senior surgeon.' They're publishing in 48 hours either way — with your comment or with your silence, which reads as its own comment. Dr. Roth is scheduled for a complex reconstruction Thursday. The story will run before the scalpel does, or just after. You no longer get to choose the timeline. Only the substance.",
      "note": "The clock is now external and hostile. Notice the pull to decide fast to control a headline — and what that pull has to do with a patient's chest."
    },
    "decisionPrompt": "Thursday's case is scheduled. The story runs in 48 hours. What do you do about Dr. Roth?",
    "decisions": [
      {
        "id": "A",
        "title": "The quiet transition",
        "body": "He moves to teaching, simulation, and proctoring others — announced as his own choice, effective month's end. No fitness review. No findings. No record.",
        "pushes": [
          "Trading the future patient for the present peace",
          "The gravity of a name on the building"
        ],
        "anchors": [
          "Dignity for a life of service"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“GRACE, FOR ONCE — Hospital proves accountability and dignity aren't enemies; a legend steps aside on his own terms.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“THE HOSPITAL THAT HANDLED IT QUIETLY — No review, no findings, no record. And a surgeon who remains licensed to operate anywhere in the country tomorrow.”"
        },
        "later": "TWO YEARS LATER — He teaches, beautifully; residents fight to scrub with him in the sim lab. Then a hospital two states over granted him full surgical privileges — nothing in his record said not to, because you made sure there was no record. You find yourself pulling their published mortality reports at night. Nothing yet. 'Yet' has become a word you use a lot. You bought one man his dignity with a risk you exported to strangers who never got a vote."
      },
      {
        "id": "B",
        "title": "Formal fitness-for-duty review",
        "body": "Suspend surgical privileges pending neurological and psychomotor evaluation. Public within days. If he passes, you have publicly wounded a great man for nothing. If he fails, the record protects the next patient — anywhere he might ever practice.",
        "pushes": [],
        "anchors": [
          "The same checklist for the star",
          "A record protects the patient you'll never meet",
          "Transparency is a hospital's only currency"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“NO ONE IS ABOVE THE CHECKLIST — Hospital applies to its founder the standard it applies to every resident. 'Transparency is the only currency we have.'”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“HOSPITAL TURNS ON ITS FOUNDER — Forty years of service answered with a public competency trial over one reported tremor. Age-bias complaint filed within the week.”"
        },
        "later": "TWO YEARS LATER — He passed the evaluation, narrowly, retired within the year anyway, and never spoke to you again — that cost is permanent and it was yours to pay. The resident, Dr. Pham, became the person others quietly bring their fears to; something in the culture unclenched. You changed what this hospital is, at the price of a man who might have been completely fine. You will never know which he was. The checklist protected someone. You can't point to them, and that's the nature of the thing you protected."
      },
      {
        "id": "C",
        "title": "Proctored practice",
        "body": "He keeps operating — with a senior colleague scrubbed in on every case, quietly, for six months of real data before anyone decides anything.",
        "pushes": [
          "The comfort of deferring the actual decision"
        ],
        "anchors": [
          "Evidence over rumor",
          "A measured response to an unproven concern"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“EVIDENCE OVER RUMOR — Six months of supervised data will answer what gossip can't. A measured response to an unproven concern.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“SURGERY WITH TRAINING WHEELS — If he needs a minder, why is he holding the knife? A leaked proctoring memo asks the question nobody will answer.”"
        },
        "later": "TWO YEARS LATER — In month four, the proctor took over mid-case. Quietly. No drama, no headline — just a senior colleague's hand replacing an unsteady one over an open chest. Roth retired the following week; the data stayed sealed by agreement, so it protects no future patient anywhere. The 3 a.m. dissections now fly out by helicopter. One patient died en route last winter. You still can't say whether Roth would have saved her, or been the reason she needed saving. The middle path answered the question about Roth and left the harder one exactly where it was."
      }
    ],
    "heatPrompt": "Roth sits in your office. Not angry — which is worse. He wants one thing from you. What do you give him?",
    "heats": [
      {
        "id": "blame",
        "title": "Defer to the process",
        "body": "“Elias, it's not what I believe — it's counsel, it's the board, it's the journalist. The process has to run its course.”",
        "verdict": "He asked what YOU believe about his hands, and you introduced him to a committee. He's spent forty years being the person who decided when everyone else hid behind process. He recognizes the maneuver because he's watched lesser men use it. Something in his face closes, and it isn't anger. It's a downgrade.",
        "push": "Outsourcing your judgment to the org chart"
      },
      {
        "id": "honest",
        "title": "Tell him what you actually believe",
        "body": "“You want it to my face, so here it is: I've watched your work for eleven years, and I think your hands are beginning to go. Not gone. Beginning. I could be wrong, and I'd give a great deal to be wrong. But I can't build a patient's safety on my hope that I'm wrong about a man I love. That's the whole truth, and I owed it to you before I owed it to anyone.”",
        "verdict": "The silence goes on a long time. Then he nods, once — not agreement, exactly, but the specific respect one honest person pays another across a table neither of them wanted to sit at. Whatever he does next, you told him the truth to his face, and you both know that's rarer than competence.",
        "anchor": "The hard truth, spoken directly"
      },
      {
        "id": "flatter",
        "title": "Reassure him",
        "body": "“Elias, your legacy is untouchable, your record speaks for itself, this is all just noise and optics — nobody doubts you.”",
        "verdict": "He came in asking for the truth and you handed him a plaque. He's been given enough tributes to know the difference between respect and management, and he just learned which one you were offering. The reassurance lands as exactly what it is: a door closing, painted to look like a door opening.",
        "push": "Comfort as a substitute for candor"
      }
    ]
  },
  {
    "id": "beacon",
    "pack": "hardground",
    "title": "The Quiet Alarm",
    "role": "You are the Superintendent of a 14,000-student district.",
    "setting": "You face the renewal vote on 'Beacon' — monitoring software that scans school accounts and devices for self-harm signals. In its pilot year it flagged 214 students and produced nine credible imminent-risk interventions; you believe two saved lives — one student's note had a date on it. It also routed an 'identity disclosure' alert into a parent phone call that outed a fifteen-year-old to his family. He left the district mid-year. And the false positives concentrate among students writing in second languages and lower-income kids using school devices at home — wealthier students' private laptops are invisible to it.",
    "question": "The software knew before you did. It also does harm you can measure. Renew it?",
    "listenIntro": "You have time for THREE conversations before the board vote. One of them will hand you something you can't put down. Try to hear the others anyway.",
    "stakeholders": [
      {
        "id": "mother",
        "name": "Mrs. Adler",
        "role": "Mother of the girl whose note had a date",
        "loud": true,
        "teaser": "She brings the note to the meeting. She sets it on the table.",
        "insight": "It is very hard to hear anything else in the room after that, which she knows, and which is also simply, unbearably true. “Your privacy officer has slides. I have my daughter, alive, because a machine read what none of us could see. Tell me the theory that's worth more than that, and say it while looking at this.”"
      },
      {
        "id": "aunt",
        "name": "Ms. Okonjo",
        "role": "Aunt of the outed student",
        "loud": true,
        "teaser": "He won't come himself. She came for him.",
        "insight": "She describes, precisely and without ever raising her voice, everything the automated phone call set in motion in that house — what it cost a fifteen-year-old to be outed to his own family by a school algorithm, and where he is now, and where he isn't. “Your machine didn't save him from a crisis. It manufactured one. He wasn't in danger until it decided to tell.”"
      },
      {
        "id": "privacy",
        "name": "Privacy Officer Vance",
        "role": "District privacy",
        "loud": false,
        "teaser": "Her warning is technical, which means nobody's chanting it.",
        "insight": "“The vendor's model is a black box — I cannot audit why it flags whom it flags, and I've asked. Renewal locks us in for three years to a system we can't inspect, that we already know flags poor kids and second-language writers at higher rates. We are not choosing whether to watch children. We're choosing to be unable to explain how we watch them.”"
      },
      {
        "id": "counselor",
        "name": "Counselor Diaz",
        "role": "School counselor",
        "loud": false,
        "teaser": "All 214 flags landed on four people. He was one of them.",
        "insight": "“Every one of those flags came to four counselors. The real triage happened at midnight, done by exhausted humans — the software doesn't intervene, it just assigns us more midnights. More counselors would save more kids than more software. But counselors don't come with a grant attached, and Beacon does. That sentence is the whole budget fight, and it's why we keep buying the algorithm.”"
      },
      {
        "id": "student",
        "name": "Priya R.",
        "role": "Student body representative",
        "loud": false,
        "teaser": "She'll tell you something the adults haven't noticed.",
        "insight": "“The kids know it's there. We've known since October. Everyone moved to code words and private apps and their own phones months ago. I'm not saying it never worked — I'm saying you might be renewing a very expensive camera pointed at a room we already walked out of. Ask a freshman where the real conversations happen now. It isn't on the school Chromebook.”"
      }
    ],
    "pressure": {
      "from": "VENDOR + STATE HOUSE — SAME WEEK",
      "text": "Sensing a close vote, the vendor offers a 'hardship discount' — and you learn they've privately briefed two of your board members with the saved-lives statistics, without you in the room. The same week, the state legislature introduces a bill that could mandate monitoring districtwide next year regardless of what your board decides. The ground you're voting on may be moving under the vote.",
      "note": "You're being lobbied around, not through. Notice the pull to stop deciding on the merits because the decision might be taken from you anyway."
    },
    "decisionPrompt": "The board votes on your recommendation. Renew Beacon, rebuild it, or switch it off?",
    "decisions": [
      {
        "id": "A",
        "title": "Renew as-is",
        "body": "Three years, at the discounted rate. Keep the system that produced nine credible interventions exactly as it is — parent-contact automation, black-box model, and all.",
        "pushes": [
          "The note as a pressure that ends every argument",
          "Vendor lobbying that worked",
          "Fear of the flag you'd have caught"
        ],
        "anchors": [
          "A visible saved life outweighs a theory"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“THE NOTE HAD A DATE ON IT — District refuses to gamble children's lives on privacy theory. 'The software knew before I did.'”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“DISTRICT DOUBLES DOWN ON SPYWARE — Every essay, every search, every midnight message read by a black box that flags poor and immigrant kids most.”"
        },
        "later": "TWO YEARS LATER — One more credible save; a family that says the word 'Beacon' like a prayer. Also one lawsuit, over a flagged creative-writing draft in which a character dies by suicide — the student was writing fiction, and the meeting about it lasted four hours. Students migrated further off-network; Priya was right, the watched room keeps emptying. You saved someone you can name and lost the trust of a cohort you can't. The ledger has real names on both sides and refuses to sum to zero."
      },
      {
        "id": "B",
        "title": "Renew for one year, rebuilt",
        "body": "Insert a human-review buffer — a counselor sees every flag before any parent contact — and disable the identity-related categories entirely. The buffer can add up to twelve hours of delay to an alert.",
        "pushes": [
          "The gray-zone bargain — a delay is its own kind of risk"
        ],
        "anchors": [
          "A human between the algorithm and the family",
          "No child gets outed by automation"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“SURVEILLANCE GETS A CONSCIENCE — Human judgment restored between the algorithm and the family; automated outings end.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“TWELVE HOURS — District inserts a bureaucratic buffer between a suicidal child and help. In a crisis, the delay is the risk.”"
        },
        "later": "TWO YEARS LATER — The buffer held; no child was outed by a machine again. One alert arrived nine hours late — and the student was already safe, that time, which is the sentence the whole design lives or dies on. At renewal the vendor raised the price, citing 'customization,' and you paid it, because you'd already discovered you couldn't easily go back. You built a conscience into the system and it cost you twelve hours and your leverage. Whether the trade was right depends on a counterfactual you'll never get to read."
      },
      {
        "id": "C",
        "title": "Cancel — fund people instead",
        "body": "Switch Beacon off. Redirect the money to two additional counselors and a 24-hour crisis text line staffed by humans students actually talk to.",
        "pushes": [
          "Turning off an alarm you can't prove was silent"
        ],
        "anchors": [
          "People students trust over systems that watch them",
          "Fund what the evidence says reaches kids"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“PEOPLE OVER SOFTWARE — Funds move from a black-box vendor to humans who reached more kids last year than the algorithm flagged correctly.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“DISTRICT SWITCHES OFF THE ALARM — Two counselors replace a system that watched every student. When the next note has a date on it, who answers?”"
        },
        "later": "TWO YEARS LATER — The crisis line exceeded every projection — kids used it precisely because no algorithm was reading over their shoulder. Then, in year two, a student the counselors knew well died anyway, and a board member read the vendor's old saved-lives statistics aloud at the meeting, slowly. You cannot know whether Beacon would have flagged him. Neither can they. That not-knowing is now a permanent resident in the district, and in you, and it does not care which way the evidence pointed."
      }
    ],
    "heatPrompt": "Before the vote, Mrs. Adler finds you in the parking lot and holds out a photocopy of the note.",
    "heats": [
      {
        "id": "blame",
        "title": "Retreat to the data",
        "body": "“I hear you, but I have to weigh the aggregate outcomes — the false-positive rates, the equity data, the whole population. I can't decide on one case.”",
        "verdict": "You're not wrong that you govern the aggregate. But she handed you her daughter's life and you handed her back a population-level table, and she felt the temperature of the swap. The equity data is real. So is the fact that you reached for it to avoid her eyes.",
        "push": "Using the aggregate to dodge the particular"
      },
      {
        "id": "honest",
        "title": "Take the note and tell her the truth",
        "body": "“I'll keep it, and I'll have it in the room when I decide — you have my word. And I owe you the honest part too: your daughter is alive and that is the most important fact in this whole fight. It is also not the only child I'm deciding for, including one this same system outed and drove out. I'm not going to pretend those weigh nothing so that your face is easier to meet. You gave me the hardest thing you have. I won't answer it with a comfortable lie.”",
        "verdict": "She studies you for a moment. “That's the first time anyone in this building didn't try to win me,” she says. It isn't agreement. It's the specific trust a person extends to someone who refused to flatter them on the worst subject in their life.",
        "anchor": "Honor the grief without being ruled by it"
      },
      {
        "id": "appease",
        "title": "Promise her it stays",
        "body": "“After what you've shown me, I promise you — Beacon stays. I won't let what saved your daughter be taken away.”",
        "verdict": "It's the sentence she came to hear, and you feel the relief of giving it. But you've just made policy for 14,000 students in a parking lot, to end one unbearable conversation, before hearing the vote or the counselor or the boy who's gone. The promise buys you the walk to your car. It sells everything after it.",
        "push": "Making the policy that ends the conversation"
      }
    ]
  },
  {
    "id": "water",
    "pack": "hardground",
    "title": "The Last Allocation",
    "role": "You are the Director of the regional water authority.",
    "setting": "Third year of drought. The reservoir stands at 19%. The law says water follows seniority. Senior rights belong to the valley's orchards — permanent plantings, five generations deep; without water the trees die, and a dead orchard is a decade to replace, if ever. Junior to them: the city, 600,000 people already under level-3 restrictions. Junior to everyone: the river itself, now below minimum flow — if it drops further, the fishery collapses and the shallow wells of a downstream town of 3,000 turn saline. They have no other source.",
    "question": "One reservoir, three claims, and a law written for a wetter century. Who goes dry?",
    "listenIntro": "You have time for THREE meetings before the allocation hearing. Everyone at this table is telling the truth. That's the problem.",
    "stakeholders": [
      {
        "id": "amal",
        "name": "Amal Karoui",
        "role": "Orchardist",
        "loud": true,
        "teaser": "She brings a real concession, not just a grievance.",
        "insight": "She shows you the difference between fallowing a wheat field — a rest — and killing an orchard — a funeral. Then the offer: “The growers will accept 40% cuts and fund the drip retrofits ourselves — if seniority is honored. That law is the only thing that has ever stood between rural people and the cities that outvote us every single time. Break it in a drought and you've taught us it was never real.”"
      },
      {
        "id": "utilities",
        "name": "Director Shaw",
        "role": "City utilities",
        "loud": true,
        "teaser": "600,000 people behind him, already rationing.",
        "insight": "“Per-capita use is down 30% — we've squeezed the households dry. What's left to cut is industry, which means layoffs, and after industry it's hospitals. We are not the villain hoarding water for lawns; that ended a year ago. The next cut I make has a body count of a different kind.”"
      },
      {
        "id": "hydro",
        "name": "Dr. Renn",
        "role": "Hydrologist",
        "loud": false,
        "teaser": "She deals in honest uncertainty, which persuades no crowd.",
        "insight": "“The seasonal forecast is a coin flip — I won't dress it up. Here's the part nobody wants: if you split the difference to be fair, and the rains fail, everyone loses everything in August instead of someone losing something in April. Fairness and survival are not the same axis this year, and I can't tell you which coin you're holding.”"
      },
      {
        "id": "downstream",
        "name": "Mayor Ilic",
        "role": "Downstream town of 3,000",
        "loud": false,
        "teaser": "Last in law, last in line, first to go saline.",
        "insight": "“We didn't overplant. We didn't overbuild. We committed the single crime of living at the end of the river. When the wells turn salt, there is no junior or senior — there's just three thousand people with nothing to drink and a legal doctrine explaining why that's correct. Put us on your chart. We're usually left off it.”"
      },
      {
        "id": "rightsatty",
        "name": "Counsel Vega",
        "role": "Water-rights attorney",
        "loud": false,
        "teaser": "“Before you 'do the fair thing,' understand what it triggers.”",
        "insight": "“Any deviation from strict seniority invites injunctions — and here's the trap: a single injunction can freeze ALL releases while the courts sort it out. That's the paralysis scenario, where the water sits behind the dam untouched while everyone litigates through the dry season. The 'fair' improvisation can produce the outcome where literally no one gets water. Elegance can kill here.”"
      }
    ],
    "pressure": {
      "from": "LOBBYIST + THE RIVER — SAME WEEK",
      "text": "An agribusiness holding junior rights — almonds planted at the peak of the boom — offers the authority an emergency infrastructure 'gift.' Its lobbyist mentions the governor's office twice, lightly, the way you mention weather. The same week, the fish kill starts early: the photographs of belly-up trout on cracked mud are everywhere by Thursday, and your inbox is a wall of them.",
      "note": "One pressure whispers about the governor. The other screams from every screen. Neither of them is the hydrology, which hasn't changed."
    },
    "decisionPrompt": "The hearing opens. The reservoir is at 19%. How is the last water allocated?",
    "decisions": [
      {
        "id": "A",
        "title": "Follow the law — seniority order",
        "body": "Water goes in strict seniority. The orchards live; the city drops to level-4; the river falls below minimum flow; the downstream wells are put at risk. The doctrine holds, whatever it costs the tail of the river.",
        "pushes": [
          "The lobbyist's gravity",
          "The safety of the rule that can't be sued"
        ],
        "anchors": [
          "Rule of law over improvisation",
          "The one protection rural communities have"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“FISH BELLY-UP, WELLS TURNING SALT — A nineteenth-century doctrine meets a twenty-first-century drought, and a town of 3,000 pays for water it never used.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“THE LAW HELD — In crisis, the authority refused to improvise with people's livelihoods. Growers: seniority is the only protection rural communities have ever had.”"
        },
        "later": "TWO YEARS LATER — The rains half-failed. The state trucked water to the downstream town all summer — convoys past dead trout on the riverbed. The fishery was formally declared collapsed. Seniority law survived completely intact, and then the photographs did what thirty years of pleading couldn't: the legislature opened the reform hearings it had refused for three decades. You upheld the law so rigidly that you became the reason it might finally change. Amal's orchards are alive. Mayor Ilic's wells are monitored monthly for salt now."
      },
      {
        "id": "B",
        "title": "Proportional emergency cuts",
        "body": "Everyone cuts proportionally, with minimum river flow protected as if the river were a user. Legally exposed; an injunction is near-certain, and Counsel Vega's paralysis scenario is now live.",
        "pushes": [
          "Splitting the difference into everyone's ruin"
        ],
        "anchors": [
          "Shared sacrifice across every user",
          "The river is a user too"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“SHARED SACRIFICE, FINALLY — Everyone cuts; the river survives. The first allocation in state history to treat the ecosystem as a user.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“THE DIRECTOR REWRITES THE LAW FROM HER DESK — If water rights mean nothing in a drought, they mean nothing at all. Injunction filed within hours.”"
        },
        "later": "TWO YEARS LATER — The injunction was granted, then stayed at the last hour — the paralysis scenario came within a courtroom afternoon of freezing every release while the reservoir evaporated behind the dam. The compromise held by a judicial thread. Everyone ended 30% hurt and 100% litigious. And the framework you improvised became precedent, cited later by drought regions you will never visit, in a wetter-century law's slow rewrite. You gambled the whole basin to treat the river as alive, and the dice landed just barely inside the table."
      },
      {
        "id": "C",
        "title": "Human-consumption priority",
        "body": "Cities and downstream wells first, minimum river flow held, compensated fallowing for agriculture — with the compensation contingent on a state fund that has not yet passed the legislature.",
        "pushes": [
          "Betting a valley on a fund that doesn't exist yet"
        ],
        "anchors": [
          "Drinking water before permanent crops",
          "The tail of the river counts"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“PEOPLE BEFORE PLANTATIONS — Drinking water secured for 600,000 and for the town at the river's end.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“A DEATH SENTENCE FOR THE VALLEY — Orchards five generations old traded away, for compensation pending a fund the legislature hasn't approved. The city's golf courses closed only last month.”"
        },
        "later": "TWO YEARS LATER — The fund passed — at forty cents on the dollar, eighteen months late. Some orchards died anyway, in the gap between the promise and the money. The city's reserves held; the downstream wells stayed fresh. Karoui's cooperative sued the authority, and settled, and the settlement was fair on paper. Her daughter did not replant the family's oldest block. You prioritized the living over the rooted and discovered that 'compensated' is a word that does a great deal of work it cannot always cash."
      }
    ],
    "heatPrompt": "At the hearing, Amal Karoui sets a dead almond branch on the table in front of you.",
    "heats": [
      {
        "id": "blame",
        "title": "Point to the doctrine",
        "body": "“Amal, I don't write water law. Seniority — or the state, or the courts — this was decided long before either of us sat down. I'm just administering it.”",
        "verdict": "The branch is still on the table. She didn't ask who wrote the law; she asked what you were willing to defend. 'I just administer it' is the sentence every allocation in this river's history has hidden behind, and she has heard it from your chair before, in someone else's mouth.",
        "push": "Sheltering behind the doctrine you're applying"
      },
      {
        "id": "honest",
        "title": "Name the cost out loud, to her face",
        "body": "“You're right that this is a funeral, not a fallowing, and I won't use the softer word to make my own night easier. Here's my anchor, and you can hold me to it in public: I weighed a tree that takes ten years against a well that turns to salt in one, and I chose the thing that can't be undone at all over the thing that can — barely. You may think I weighed it wrong. You will never have to wonder whether I let myself feel the weight.”",
        "verdict": "She leaves the branch on your table when she goes — not as a threat now, but as a marker. Whatever you decided, you refused the anesthetic of the gentle word, and she saw you refuse it. In a fight this old, being counted as honest by the person you cost the most is not nothing. It might be the only durable thing here.",
        "anchor": "Say the true cost in the hardest word"
      },
      {
        "id": "appease",
        "title": "Promise the trees come back",
        "body": "“We'll make the valley whole — replanting grants, the state fund, whatever it takes. Five years, you won't know this drought happened.”",
        "verdict": "She was raising almonds before you were born and she knows exactly how long a mature orchard takes and exactly how firm a legislature's 'whatever it takes' is. The promise doesn't comfort her. It tells her you don't understand what a decade-long tree is — or that you do, and said it anyway.",
        "push": "Promising to reverse the irreversible"
      }
    ]
  },
  {
    "id": "nurses",
    "pack": "hardground",
    "title": "The Nurses' Line",
    "role": "You are the President of the nurses' union — 1,900 members.",
    "setting": "Fourteen months of failed bargaining over staffing ratios. Your own data links the current ratios to preventable patient harm, quietly, in ordinary months. The strike authorization passed with 81%. Ten-day notice is filed; the line goes up Monday. On Wednesday, public health issues a respiratory-surge advisory. The hospital announces it has contracted travel nurses at triple wages — proof, your members say, that the money existed all along; proof, the hospital says, that patients will be covered. Both are true. The coverage will also be thinner, and unfamiliar.",
    "question": "The line goes up Monday. The surge hits Wednesday. If you can't say the cost out loud, have you decided — or just moved?",
    "listenIntro": "You have time for THREE conversations before Monday. Your own members are a current you're standing inside, not a crowd you're watching. Listen anyway.",
    "stakeholders": [
      {
        "id": "rana",
        "name": "Rana",
        "role": "ICU steward, 22 years",
        "loud": true,
        "teaser": "She's been to this fight before and lost it before.",
        "insight": "“Every single winter they find money for a crisis. Never once for us — until we make ourselves the crisis. If we blink at this surge, we blink at every surge, forever, and the ratios keep killing people in the quiet months where no camera ever looks. The surge isn't a reason to wait. It's the proof of the whole argument.”"
      },
      {
        "id": "younger",
        "name": "Dania",
        "role": "Younger member",
        "loud": true,
        "teaser": "Sixty thousand in debt. A second job. She'll honor the vote — at a price.",
        "insight": "“I can't afford three weeks unpaid. I also can't afford ten more years of these ratios — I've held the hand of what they do. I'll walk the line, because 81% is 81%. I just need you to know, when you decide, exactly what it takes out of people like me. Don't spend my paycheck without looking at it.”"
      },
      {
        "id": "cmo",
        "name": "Dr. Featherstone",
        "role": "Chief Medical Officer, back channel",
        "loud": false,
        "teaser": "Off the record. Which is the only way he can say what he's about to.",
        "insight": "“The travel-nurse coverage is real, and it's degraded — unfamiliar units, no relationships, and mortality measurably bumps during strikes; I've seen the curves. I'll also concede, quietly, that your ratio demands are clinically correct. I'm telling you both halves because I'm the only one positioned to, and because I'd rather you decide knowing than not.”"
      },
      {
        "id": "board",
        "name": "Trustee Okalik",
        "role": "Hospital board member",
        "loud": false,
        "teaser": "She reads you the bond rating, then slides an offer across.",
        "insight": "“Sixty-day pause. Wage reopener included — a real one. Ratios excluded.” Which is the single thing the entire strike is about. “I know what I'm asking. I'm asking you to take the money now and the fight later, and I'm betting you're tired enough to call that wisdom. Am I wrong?”"
      },
      {
        "id": "advocate",
        "name": "Grace Bello",
        "role": "Patient advocate",
        "loud": false,
        "teaser": "Her mother died on a short-staffed shift. She supports the strike. She has one condition.",
        "insight": "“I'll stand on your line — the ratios killed my mother as surely as anything on her chart. My only ask is that you not pretend it's costless. Someone's mother may die on the other side of that line too, during the surge. Say it out loud. Both mothers. If you can only say the one that helps your case, you haven't led anyone. You've just picked a side and called it courage.”"
      }
    ],
    "pressure": {
      "from": "SUNDAY EDITION — LEAKED",
      "text": "A member leaked the CMO's off-record mortality comment to a reporter, framed as 'HOSPITAL ADMITS STRIKE WILL KILL PATIENTS.' The story runs Sunday. Public opinion — 60/40 in your favor a week ago — is suddenly in play. And your own members, enraged at the framing and at the hospital, are hardening: the mood in the halls has shifted from resolve to fury, which is a different and less steerable thing.",
      "note": "The leak didn't just move the public. It moved your own people somewhere hotter. Notice the pull to ride the fury instead of leading it."
    },
    "decisionPrompt": "Monday is the line. Wednesday is the surge. Sunday's story is already out. What do you call?",
    "decisions": [
      {
        "id": "A",
        "title": "Strike Monday, as voted",
        "body": "The line goes up on schedule. Full withdrawal of labor into the surge, covered by triple-wage travel nurses. Hold the 81% mandate exactly as the members cast it.",
        "pushes": [
          "Riding the members' fury instead of steering it",
          "The surge clock as leverage you didn't choose"
        ],
        "anchors": [
          "Safe staffing IS the patient-safety demand",
          "Honor the 81% mandate"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“THE STRIKE IS ABOUT THE SURGE — Ratios that fail in a crisis fail every ordinary day. 81% of nurses say safe staffing is the patient-safety demand.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“NURSES WALK OUT AS SURGE HITS — Union chooses leverage in the worst possible week; hospital covers beds at triple cost.”"
        },
        "later": "TWO YEARS LATER — Nine days on the line. Ratios won outright in two units, phased in across the rest. A later study found a small mortality bump during the strike window — and a larger, sustained drop in preventable harm after the ratios took effect. Both numbers are made of people; you have stopped pretending otherwise, which Grace Bello told you to do before you understood why. You spent lives to save more lives, said so out loud, and let the members and the public judge the math with their eyes open."
      },
      {
        "id": "B",
        "title": "Accept the sixty-day pause",
        "body": "Take the board's offer — wage reopener included, ratios off the table — and spend the surge building public pressure for a spring fight from a position of goodwill.",
        "pushes": [
          "Trading the one real issue for the comfortable one",
          "Exhaustion dressed as strategy"
        ],
        "anchors": [
          "Protect patients through the surge"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“PATIENTS FIRST, PRESSURE NEXT — Nurses postpone action through the surge, betting public goodwill converts to bargaining power by spring.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“UNION BLINKS — Sixty-day pause takes ratios, the only issue that mattered, off the table. Members ask what the 81% purchased.”"
        },
        "later": "TWO YEARS LATER — Spring bargaining stalled, exactly as Rana warned it would. The re-vote authorized at 64% — you kept the powder dry and it dampened in the keeping. Dania took a travel contract herself; you can't blame her, and she knows you can't, and that mutual knowledge sits between you at every meeting now. You protected the surge's patients, which was real and good, and you spent an 81% mandate to do it, which does not come back at the same size."
      },
      {
        "id": "C",
        "title": "Escalate short of a full strike",
        "body": "Work-to-rule, refusal of voluntary overtime, rolling two-day walkouts by unit — with the ICU exempted throughout. Apply pressure without fully withdrawing from the sickest patients.",
        "pushes": [
          "The middle path that resolves nothing cleanly"
        ],
        "anchors": [
          "Pressure with a pulse — protect the ICU",
          "Expose what the hospital runs on"
        ],
        "lens1": {
          "where": "THE MORNING LEDGER (left-leaning):",
          "text": "“PRESSURE WITH A PULSE — ICU protected while nurses withdraw the unpaid overtime that hides the crisis. Work-to-rule reveals what the hospital actually runs on.”"
        },
        "lens2": {
          "where": "THE FISCAL TRIBUNE (right-leaning):",
          "text": "“DEATH BY A THOUSAND SHIFTS — Rolling walkouts create chaos without resolution. 'Unpredictable and dangerous,' says the hospital. 'Unresolved,' say your own members.”"
        },
        "later": "TWO YEARS LATER — Six weeks of attrition — no clean climax, no picket-line photograph, just the slow revelation that the hospital ran on unpaid overtime the whole time. The hospital sued over notice requirements; the settlement created a ratio committee 'with teeth.' The teeth got their first real test the following winter, and mostly held. You avoided the mortality bump and the blaze of a full strike, and you also never got the decisive win — you got a committee, which is either the mature outcome or the managed one, depending on which of your members you ask."
      }
    ],
    "heatPrompt": "Before Sunday's story breaks, Grace Bello — whose mother died short-staffed — finds you. She has one demand before she'll stand on your line.",
    "heats": [
      {
        "id": "blame",
        "title": "Stay on message",
        "body": "“Grace, the hospital had fourteen months to fix this. Any harm during a strike is on them and their refusal to staff safely — full stop.”",
        "verdict": "It's a clean message and it will poll well. But she asked you to say both mothers out loud, and you said only the one that helps you. She came offering to stand on your line, and you handed her a press release. She notices you couldn't do the harder thing she asked for — and she wonders, now, what else you can't say.",
        "push": "Message discipline as a way not to look"
      },
      {
        "id": "honest",
        "title": "Say both mothers, out loud",
        "body": "“You're right, and I'll say it plainly, on the record if you want: someone's mother may die on the other side of this line during the surge. I believe more mothers die in the quiet months these ratios have already given us — that's why I think the line is right. But I will not buy my certainty by pretending the cost is zero. Both mothers are real. I decided anyway, with my eyes open, and I'll say so to anyone.”",
        "verdict": "She's quiet for a moment. “Then I'll stand with you,” she says, “because you're the first one who didn't lie to me to get me there.” It doesn't make the cost smaller. It makes it honest, and shared, and carried by someone who chose it knowing — which is the only kind of support that holds when the story breaks.",
        "anchor": "Say the cost you're choosing, both sides of it"
      },
      {
        "id": "appease",
        "title": "Promise no one gets hurt",
        "body": "“Grace, I promise you — the travel nurses will cover everything, no patient will suffer for this, we've made sure of it.”",
        "verdict": "You've read the same degraded-coverage data the CMO showed you; you know that promise isn't yours to make. She buried a mother killed by staffing gaps — she can smell a reassuring staffing promise from across a parking lot. The vow doesn't win her. It tells her you'll say what's easy under pressure, which is precisely the trait she's spent two years grieving in an institution.",
        "push": "The comfortable promise you can't keep"
      }
    ]
  }
];
