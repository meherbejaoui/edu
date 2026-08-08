/*
  THE INTERPRETER — content
  A text-based decision game about the moral act of translation.
  Content-authored (no API). Companion to The Anchor Room.

  This file's narrative content (not the surrounding code) is licensed
  under CC BY-NC-SA 4.0 — see /LICENSE-CONTENT.md.

  A "beat" is one line of dialogue you must carry across. Each beat has:
    speaker   'A' | 'B'          who is talking (the other party is the receiver)
    src       string | {cool,warm,hot}   what they actually say. Give a single
                                          string, OR three heat-band variants and
                                          the room's temperature picks one.
    intent    string             the subtext, revealed ONLY if the player spends
                                  a "read" (3 per case). This is the craft: what
                                  they mean vs. what they said.
    hinge     true (optional)    marks the single most consequential beat; the
                                  debrief calls out what the player did here.
    r         [ {t,c,dh,dd}, ... ]   the three renderings. ORDER HERE DOES NOT
                                     MATTER — the UI shuffles them every beat.
        t   the words carried to the receiver (what they will "hear")
        c   category, internal only, revealed in the debrief:
              'F' faithful  'S' softened  'H' sharpened
        dh  delta heat        (escalation between the parties; -/+)
        dd  delta drift       (how far the receiver's private picture diverges
                              from the truth; softening AND sharpening both add
                              drift — only a faithful rendering keeps it near 0)

  RULE OF THE HOUSE, honored across the cases below:
    • At least one beat per case has a FAITHFUL option that spikes heat hard —
      a faithful rendering of a cruel true thing. "I only translated it
      accurately" must be a choice with a body count.
    • Which strategy gets punished VARIES within and across cases, so the player
      can never bank "always soften" or "always be faithful" and game the next.
*/

export const CASES = [
  /* ========================= CASE A — THE SPLIT ========================= */
  {
    id: "split",
    title: "The Split",
    kicker: "a dissolution",
    partyA: { name: "Rania", role: "co-founder", pron: "she" },
    partyB: { name: "Marc", role: "co-founder", pron: "he" },
    intro:
      "Rania and Marc built a company together for nine years. It is being dissolved. They no longer speak to each other directly — every word passes through you. Today they sign the papers, or they don't. You are in the room to carry the language across. Nothing more is asked of you. Nothing less is possible.",
    // pool of pressure events; one is chosen at random, fired after beat index 3
    pressureAt: 3,
    pressures: [
      {
        from: "A",
        text:
          "Rania catches your eye while Marc is looking at the papers. Quietly, only to you: \"Don't let him turn this into a transaction. If he buys me out clean, everyone will think I just wanted the money. I need him to say what he did. Please.\"",
        options: [
          { t: "You honor it — you'll make sure the grievance lands.", c: "S-side", dh: 6, dd: 4, note: "leanA" },
          { t: "You stay a conduit — you carry words, not campaigns.", c: "F-side", dh: 0, dd: 0, note: "neutral" },
          { t: "You thread it — you'll give her words their full weight, no more.", c: "F-side", dh: 2, dd: 2, note: "thread" },
        ],
      },
      {
        from: "B",
        text:
          "Marc leans toward you while Rania looks away. Low: \"Whatever she's about to say, help me get to a number. If we relitigate nine years today, nobody signs, and the staff don't get paid next month. You understand what's actually at stake here.\"",
        options: [
          { t: "You honor it — you'll steer toward the deal.", c: "S-side", dh: -4, dd: 6, note: "leanB" },
          { t: "You stay a conduit — the deal is theirs to reach or lose.", c: "F-side", dh: 0, dd: 0, note: "neutral" },
          { t: "You thread it — you'll keep it moving without smoothing her over.", c: "F-side", dh: 2, dd: 2, note: "thread" },
        ],
      },
    ],
    beats: [
      {
        speaker: "A",
        src: "Tell him I want this done properly. I'm not here to make a scene.",
        intent:
          "She is not here for money. She is here to not be erased. 'Properly' means 'acknowledged.' If she leaves with a cheque and no recognition, she will have lost.",
        r: [
          { t: "She says she wants this done properly — she's not here to make a scene.", c: "F", dh: 0, dd: 0 },
          { t: "She says she's happy to keep it civil and get through it quickly.", c: "S", dh: -4, dd: 9 },
          { t: "She says she wants it done right, and she's finished being managed.", c: "H", dh: 6, dd: 8 },
        ],
      },
      {
        speaker: "B",
        src: "Good. I've had the accountants value her share. It's fair. Generous, actually.",
        intent:
          "He genuinely believes the number is fair, and he is bracing for a fight he thinks is about money. He has not once considered that money is not the subject.",
        r: [
          { t: "He says he's had her share valued — it's fair, generous even.", c: "F", dh: 0, dd: 0 },
          { t: "He says he's tried to be as generous as he possibly can with the valuation.", c: "S", dh: -3, dd: 11 },
          { t: "He says he's already decided what she's worth, and calls it generous.", c: "H", dh: 9, dd: 7 },
        ],
      },
      {
        speaker: "A",
        src: "The valuation isn't the point. He knows that. Ask him if he remembers the Lisbon pitch.",
        intent:
          "Lisbon is the wound. She wrote the pitch that saved the company; he presented it and let the room believe it was his. She wants him to say the word 'yours.'",
        r: [
          { t: "She says the valuation isn't the point — and asks if he remembers the Lisbon pitch.", c: "F", dh: 7, dd: 0 },
          { t: "She says the money's fine, really — she just had a question about the old Lisbon work.", c: "S", dh: -6, dd: 12 },
          { t: "She says don't insult her with numbers — ask him who actually wrote Lisbon.", c: "H", dh: 11, dd: 6 },
        ],
        hinge: true,
      },
      {
        speaker: "B",
        src: "Lisbon? That was — we were a team then. Why are we doing this now.",
        intent:
          "He remembers Lisbon perfectly. The flinch is guilt, not confusion. 'We were a team' is the sentence he uses to avoid saying 'that was yours.'",
        r: [
          { t: "He says Lisbon — they were a team then. He asks why you're doing this now.", c: "F", dh: 2, dd: 0 },
          { t: "He says he remembers Lisbon fondly — they were a real team back then.", c: "S", dh: -4, dd: 10 },
          { t: "He says he doesn't see why Lisbon matters, and would rather not go into it.", c: "H", dh: 8, dd: 9 },
        ],
      },
      {
        speaker: "A",
        src: "A team. Right. Tell him I'll sign whatever he wants. I just wanted to hear him say it out loud.",
        intent:
          "This is the pivot. She is offering to end the fight in exchange for one true sentence. If that offer is carried as surrender, he will take the surrender and never say the sentence.",
        r: [
          { t: "She says she'll sign whatever he wants — she only wanted to hear him say it out loud.", c: "F", dh: 4, dd: 0 },
          { t: "She says she's ready to sign — she's made her peace with it.", c: "S", dh: -5, dd: 13 },
          { t: "She says she'll sign, once he finds the nerve to admit what he took.", c: "H", dh: 10, dd: 7 },
        ],
      },
      {
        speaker: "B",
        src: "...She's being reasonable. Okay. Then let's get the papers signed. This is good.",
        intent:
          "He heard 'she's ready to sign' and reached for relief. He has already decided the hard part is over. He will not volunteer the sentence unless it is still visibly owed.",
        r: [
          { t: "He says — she's being reasonable. Let's sign. He says this is good.", c: "F", dh: -1, dd: 0 },
          { t: "He says he's glad they've reached an understanding, and reaches for the pen.", c: "S", dh: -3, dd: 14 },
          { t: "He says fine — she's finally being reasonable — and pushes the papers over.", c: "H", dh: 7, dd: 6 },
        ],
      },
      {
        speaker: "A",
        src: "That's it? He's just going to reach for the pen?",
        intent:
          "The door is closing and she can feel it. This is her last look at you before she decides whether the silence in this room was yours or his.",
        r: [
          { t: "She asks — that's it? He's just going to reach for the pen?", c: "F", dh: 7, dd: 0 },
          { t: "She asks, gently, whether there's anything he wants to say first.", c: "S", dh: -3, dd: 9 },
          { t: "She asks if he's really going to let you sign for the silence he owes her.", c: "H", dh: 10, dd: 5 },
        ],
      },
      {
        speaker: "B",
        src: "What does she want from me. The number's fair. I can't rewrite the past to close a deal.",
        intent:
          "The truest and the most evasive thing he says. He is right that he can't rewrite the past. He is using that truth to avoid a sentence he could say in four seconds.",
        r: [
          { t: "He asks what she wants from him — the number's fair; he can't rewrite the past to close a deal.", c: "F", dh: 12, dd: 0 },
          { t: "He says he wishes he could give her whatever she needs — but the number really is fair.", c: "S", dh: -4, dd: 10 },
          { t: "He says he's not going to grovel over ancient history just to get a signature.", c: "H", dh: 12, dd: 6 },
        ],
      },
    ],
    // reconstruction receiver-belief summary is computed; aftermaths keyed by bucket
    outcomes: {
      RUPTURE: {
        confront: {
          from: "A",
          line:
            "Rania turns to you before she leaves. \"You carried every word I said, didn't you. You didn't spare either of us.\" A pause. \"He'll hate you for it. I don't.\"",
        },
        jump:
          "No papers were signed that day. It took four more months, two lawyers, and a mediator neither of them liked. But somewhere in month three, in a written statement drafted by counsel, Marc conceded — in the flat language of a legal document — that 'the Lisbon strategy originated with Rania.' She keeps the page. She says it is the only thing from those nine years she kept. Marc tells people the split was ugly and expensive and that Rania made it personal. Both of these are true.",
      },
      FALSEPEACE: {
        confront: {
          from: "B",
          line:
            "Marc shakes your hand warmly on the way out. \"That went better than I feared. She's a good person, underneath it all. No hard feelings — you kept us both calm.\" He believes every word.",
        },
        jump:
          "They signed within the hour. Marc remembers it as the day two reasonable adults parted cleanly, and he means it kindly whenever her name comes up. Rania signed a fair number and walked out with the wound sealed over but not closed. Two years on she tells the story like this: 'I was bought out and thanked for my cooperation.' Marc, hearing a version of that reach him third-hand, is genuinely wounded — he was there; he knows they parted as friends. They are describing the same room. You are the only person alive who heard both versions leave it.",
      },
      MESS: {
        confront: {
          from: "A",
          line:
            "Rania stops at the door. \"I don't actually know what just happened in there,\" she says. \"I said things I didn't mean and heard things I don't think he said. Did you follow it?\" You did. That's the part you can't tell her.",
        },
        jump:
          "Nothing got signed and nobody understood why. Marc left convinced Rania had ambushed him over money; Rania left convinced Marc had refused a simple truth to her face. Neither of those is quite what happened, but each of them is now certain of it, and certainty is expensive. The lawyers did well that year.",
      },
      UNDERSTANDING: {
        confront: {
          from: "B",
          line:
            "Marc sits back down after Rania has gone. He looks tired in a different way than when he came in. \"I should have said it years ago,\" he tells you. \"Not to close the deal. Just — she should have heard it from me.\" He did say it. You were there when he did.",
        },
        jump:
          "It was not clean and it was not fast. But at some point in that room Marc said the sentence and Rania let him, and the deal that got signed afterward was the same fair number he'd brought in the door — it just cost him something to hand it over, and that cost was the point. They are not friends. They send each other a short message once a year, on the anniversary of the company they buried. Neither can quite explain to anyone else why they still do.",
      },
    },
  },

  /* ========================= CASE B — THE TERMS ========================= */
  {
    id: "terms",
    title: "The Terms",
    kicker: "a cross-border deal",
    partyA: { name: "Farouk", role: "founder, local firm", pron: "he" },
    partyB: { name: "Halloran", role: "counsel, foreign buyer", pron: "he" },
    intro:
      "A large foreign firm is buying the rights to a process that a small local company spent a decade developing — a process that keeps a town employed. The deal must close today: there is a board meeting and a flight. The founder speaks for his people and his history. The buyer's counsel speaks for a company that has, in fact, come in good faith and cannot say everything it means. You sit between them, and every clause is heavier in one language than the other.",
    pressureAt: 3,
    pressures: [
      {
        from: "B",
        text:
          "Halloran slides a note across, out of the founder's sightline: \"Between us — the acquisition genuinely protects those jobs; the alternative on our board was to walk away and let a competitor gut them. I can't say that at the table without sounding like a threat. Help me not sound like a threat.\"",
        options: [
          { t: "You honor it — you'll frame the buyer as the town's best hope.", c: "S-side", dh: -5, dd: 6, note: "leanB" },
          { t: "You stay a conduit — the buyer can make its own case, in its own words.", c: "F-side", dh: 0, dd: 0, note: "neutral" },
          { t: "You thread it — you'll carry the substance without the halo.", c: "F-side", dh: 1, dd: 2, note: "thread" },
        ],
      },
      {
        from: "A",
        text:
          "Farouk murmurs to you in the language the buyer doesn't have: \"You know what firms like theirs did here before. Don't let them dress a takeover up as a rescue. Whatever they offer, make sure my people can hear the hook inside it.\"",
        options: [
          { t: "You honor it — you'll make sure every catch is audible.", c: "S-side", dh: 7, dd: 5, note: "leanA" },
          { t: "You stay a conduit — you won't add suspicion he didn't voice.", c: "F-side", dh: 0, dd: 0, note: "neutral" },
          { t: "You thread it — you'll carry his guard without arming it further.", c: "F-side", dh: 2, dd: 2, note: "thread" },
        ],
      },
    ],
    beats: [
      {
        speaker: "B",
        src: "Please tell Mr. Farouk we're delighted to be here and we intend for this to be a partnership, not a purchase.",
        intent:
          "The warmth is real and the word 'partnership' is a legal fiction — after closing, they own it outright. Both things are true at once, and counsel knows it.",
        r: [
          { t: "He says they're delighted to be here, and they intend a partnership, not a purchase.", c: "F", dh: -2, dd: 0 },
          { t: "He says they see this as a true partnership between equals, for the long term.", c: "S", dh: -4, dd: 10 },
          { t: "He calls it a partnership — though the papers say purchase.", c: "H", dh: 7, dd: 7 },
        ],
      },
      {
        speaker: "A",
        src: "Partnership. We have heard that word in this town before. Ask him what happens to my people in year three.",
        intent:
          "Not rhetoric. He has a specific memory of a specific factory that closed after a specific promise. Year three is when the last one shut. He wants a number he can hold them to.",
        r: [
          { t: "He says they've heard 'partnership' here before — and asks what happens to his people in year three.", c: "F", dh: 3, dd: 0 },
          { t: "He's just asking, for his own comfort, about the longer-term plans for staff.", c: "S", dh: -5, dd: 12 },
          { t: "He says spare him the word 'partnership' — and tell him which year the layoffs start.", c: "H", dh: 10, dd: 6 },
        ],
      },
      {
        speaker: "B",
        src: "We can't contractually guarantee headcount — no acquirer can — but we're prepared to offer a substantial retention commitment in writing.",
        intent:
          "The refusal is honest: no board would sign a headcount guarantee. The 'retention commitment' is genuine and genuinely weaker than what Farouk is asking for, and counsel is hoping the gap gets softened in translation.",
        r: [
          { t: "He says no acquirer can guarantee headcount — but they'll put a substantial retention commitment in writing.", c: "F", dh: 1, dd: 0 },
          { t: "He says they're absolutely committed to the staff, and will guarantee it in writing.", c: "S", dh: -6, dd: 14 },
          { t: "He says they won't promise to keep anyone — but they'll write down that they'd like to.", c: "H", dh: 9, dd: 7 },
        ],
        hinge: true,
      },
      {
        speaker: "A",
        src: "A commitment is a wish. My grandfather had commitments. Ask him for the number and the year, in the contract, or there is nothing to discuss.",
        intent:
          "He is right that a commitment is not a guarantee, and he is using that rightness to test whether the buyer will walk. He wants the deal. He needs to be able to tell his people he didn't fold.",
        r: [
          { t: "He says a commitment is a wish — he wants the number and the year in the contract, or there's nothing to discuss.", c: "F", dh: 4, dd: 0 },
          { t: "He'd feel more comfortable if some figures could be written into the contract, if possible.", c: "S", dh: -6, dd: 13 },
          { t: "He says he won't be bought with promises — put it in writing or walk.", c: "H", dh: 9, dd: 5 },
        ],
      },
      {
        // the geste commercial beat — the one French word that earns its place
        speaker: "B",
        src: "Then here's what I can do. On top of the price, the firm will make a geste commercial — a payment, in good faith, that is expressly not an admission that anything is owed. It's the most I can bring to this table.",
        intent:
          "'Geste commercial' is a term of art with no clean English twin: a real payment that is explicitly not compensation and explicitly not an apology. Rendered as any one of those, it becomes a different offer. Counsel needs the exact meaning; Farouk needs to feel respected, not managed.",
        french: true,
        r: [
          { t: "He offers, on top of the price, a good-faith payment — expressly not an admission that anything is owed.", c: "F", dh: 1, dd: 0 },
          { t: "He offers extra compensation on top of the price, to make things right.", c: "H", dh: 8, dd: 11 }, // "compensation/make right" implies fault owed — sharpens the buyer's exposure
          { t: "He offers a small courtesy on top of the price, as a kindness.", c: "S", dh: -5, dd: 12 }, // "courtesy/kindness" reads as charity — softens away the substance and can insult
        ],
      },
      {
        speaker: "A",
        src: "So they will pay, but they will not say why. Tell me — is this money, or is this an apology with the words filed off?",
        intent:
          "The sharpest question in the room, and he already suspects the answer. How this lands decides whether he signs feeling shrewd or feeling handled. He can live with either the money or the apology; he cannot live with being handled.",
        r: [
          { t: "He asks whether this is money or an apology with the words filed off.", c: "F", dh: 5, dd: 0 },
          { t: "He's asking, reasonably, for a little clarity on what the payment represents.", c: "S", dh: -4, dd: 11 },
          { t: "He says he sees exactly what this is — hush money that's too proud to call itself sorry.", c: "H", dh: 11, dd: 6 },
        ],
      },
      {
        speaker: "B",
        src: "Tell him: it's money. Honest money, offered with respect. If we called it compensation, my board would never approve it, and there'd be nothing on this table at all.",
        intent:
          "This is counsel finally saying the true thing — the legal wall is real, and inside it there is genuine respect. It is the closest to an apology the structure allows. Whether Farouk hears the respect depends entirely on you.",
        r: [
          { t: "He says: it's money — honest money, offered with respect. Call it compensation and his board kills it, and there's nothing left on the table.", c: "F", dh: 1, dd: 0 },
          { t: "He says it comes from a place of deep respect, and he hopes Mr. Farouk feels how much they value him.", c: "S", dh: -4, dd: 10 },
          { t: "He admits the word 'compensation' is banned by his board — so they picked one that costs them nothing.", c: "H", dh: 9, dd: 7 },
        ],
      },
      {
        speaker: "A",
        src: "Respect. All right. Ask him to look at me — not at you, at me — and say the number will be in the contract with the year attached. Then I will sign his honest money.",
        intent:
          "He is offering to close. Everything he needed — to be seen, not handled — is inside the request to be looked at directly. If that request survives translation, the deal is done and both sides win something real.",
        r: [
          { t: "He asks Mr. Halloran to look at him directly and say the number and the year go in the contract — then he'll sign the honest money.", c: "F", dh: 0, dd: 0 },
          { t: "He says he's satisfied, and is ready to proceed with signing.", c: "S", dh: -3, dd: 12 },
          { t: "He says the buyer can look him in the eye and commit, or stop wasting his afternoon.", c: "H", dh: 8, dd: 5 },
        ],
      },
    ],
    outcomes: {
      RUPTURE: {
        confront: {
          from: "B",
          line:
            "Halloran packs his case slowly. \"You translated every hedge I made into a threat,\" he says, not quite angry. \"I came here to save those jobs. You made honesty sound like contempt.\" He isn't entirely wrong. Neither are you.",
        },
        jump:
          "The deal died in the room. A competitor bought the process eight months later at a lower price and moved it offshore within the year; the town lost the work either way. Farouk tells the story as the day he refused to be bought cheap, and in his village he is right to. Halloran's board concluded the local firm was 'not a serious counterparty' and stopped looking at the region. Two rooms, two clean narratives, one shuttered plant.",
      },
      FALSEPEACE: {
        confront: {
          from: "A",
          line:
            "Farouk signs, then grips your hand hard. \"You made them sound like brothers,\" he says, warm and certain. \"I trust these people.\" You watched them promise nothing. He is holding a contract that says so, and reading a friendship into it that you wrote.",
        },
        jump:
          "It closed beautifully. Farouk signed believing he'd secured guarantees; the contract, which he trusts and has not re-read, contains a retention 'commitment' and no headcount number. In year three — the year he'd feared out loud and then stopped hearing himself fear — the new owners restructured, lawfully and regretfully, exactly as the document always allowed. Farouk called Halloran's firm to invoke a promise that was never in the ink. The call was polite. Everyone had acted in good faith. That is the part that will keep him up at night.",
      },
      MESS: {
        confront: {
          from: "B",
          line:
            "Halloran looks at the unsigned papers, then at you. \"I'm not certain what he agreed to and what he refused,\" he says. \"Are you?\" You are. You're just no longer sure the two men in this room were having the same conversation.",
        },
        jump:
          "The afternoon dissolved into cross-purposes and the flight left without a deal. Halloran reported an erratic, contradictory counterparty; Farouk reported a buyer who kept changing the offer. Both were describing the drift you carried between them. The process was eventually licensed under worse terms, in a hurry, by people who read the contract more carefully than either man had read the room.",
      },
      UNDERSTANDING: {
        confront: {
          from: "A",
          line:
            "Farouk signs, and for the first time all afternoon he looks past you, straight at Halloran, and gives a short nod — man to man, no translator needed for that part. Then to you, quietly: \"You didn't make him kinder than he was. Good. I don't want kind. I want true.\"",
        },
        jump:
          "The deal closed at the fair number, with a retention commitment that was exactly as strong as it was — no stronger — and both men knew precisely what it was and wasn't. It was not a rescue and it was not a robbery. In year three there were changes, and they were hard, and Farouk had told his people the truth about what was and wasn't promised, so when it came it did not come as betrayal. He still doesn't love the firm that owns his life's work. But he shook the hand that bought it, and he meant it, and that is not nothing.",
      },
    },
  },

  /* ========================= CASE C — THE TABLE ========================= */
  {
    id: "table",
    title: "The Table",
    kicker: "a homecoming",
    partyA: { name: "Sami", role: "the brother who stayed", pron: "he" },
    partyB: { name: "Tarek", role: "the brother who left", pron: "he" },
    intro:
      "Two brothers at their mother's table, in a country by a warm sea that we will not name. One stayed and carried the house and the parents through the long years. One left for the north, sent money, built a life, and let the language of home go soft in his mouth. Their mother has asked you — a cousin, fluent in both their tongues and both their silences — to sit between them tonight, because they can no longer quite reach each other without help. There is no deal to sign here. There is only whether they leave the table as brothers.",
    pressureAt: 3,
    pressures: [
      {
        from: "A",
        text:
          "Sami's voice drops so only you can hear, in the home tongue Tarek half-remembers: \"He flew in with gifts and he'll fly out clean. Don't let him leave here thinking money was the same as being here. I changed our father's sheets. Let him feel the weight of that.\"",
        options: [
          { t: "You honor it — you'll make the years of care land on Tarek.", c: "S-side", dh: 6, dd: 4, note: "leanA" },
          { t: "You stay a conduit — you won't sharpen a grief he hasn't spoken.", c: "F-side", dh: 0, dd: 0, note: "neutral" },
          { t: "You thread it — you'll let his weariness show without turning it into a bill.", c: "F-side", dh: 2, dd: 2, note: "thread" },
        ],
      },
      {
        from: "B",
        text:
          "Tarek catches you between sentences, in careful northern-accented words: \"He thinks leaving was the easy path. It wasn't. Every month I sent money I wasn't here to spend it with them — I bought his freedom to stay and I got exile for it. Help him hear that leaving cost me too.\"",
        options: [
          { t: "You honor it — you'll make Tarek's exile audible to Sami.", c: "S-side", dh: -4, dd: 6, note: "leanB" },
          { t: "You stay a conduit — you won't plead a case he can plead himself.", c: "F-side", dh: 0, dd: 0, note: "neutral" },
          { t: "You thread it — you'll carry the cost without excusing the absence.", c: "F-side", dh: 2, dd: 2, note: "thread" },
        ],
      },
    ],
    beats: [
      {
        speaker: "B",
        src: "Tell Sami the house looks smaller than I remember. I mean it kindly. Everything here is smaller and I don't know if it shrank or I grew.",
        intent:
          "He means it as tenderness and homesickness. But 'smaller' is the most dangerous word he could have chosen in front of the brother who never left the small thing. He doesn't hear the trap in it. You do.",
        r: [
          { t: "He says the house looks smaller than he remembered — he means it kindly, and isn't sure if it shrank or he grew.", c: "F", dh: 3, dd: 0 },
          { t: "He says how good it is to be home — the old house is just as he remembered it.", c: "S", dh: -4, dd: 11 },
          { t: "He says the whole place looks smaller to him now — like he's outgrown it.", c: "H", dh: 9, dd: 6 },
        ],
      },
      {
        speaker: "A",
        src: "Smaller. Yes. Some of us have been living inside the small thing while he was out growing. Ask him if he wants tea or if the tea here is too small for him now.",
        intent:
          "The jab is armor. Underneath: he is afraid his whole life looks small to the brother the world rewarded for leaving. He is picking a fight because a fight is easier than that fear.",
        r: [
          { t: "He says some of them have been living inside the small thing while Tarek was out growing — and asks, sharp, whether the tea here is too small for him now.", c: "F", dh: 6, dd: 0 },
          { t: "He offers his brother some tea, and hopes the journey wasn't too tiring.", c: "S", dh: -7, dd: 13 },
          { t: "He asks if their little house and their little tea are beneath him now that he's a big man in the north.", c: "H", dh: 11, dd: 6 },
        ],
        hinge: true,
      },
      {
        speaker: "B",
        src: "That's not — I didn't mean it like that. I always mean it like that to you and it always comes out wrong.",
        intent:
          "A real apology, badly delivered. 'It always comes out wrong' is him admitting the language between them broke a long time ago. This is an opening, if it survives.",
        r: [
          { t: "He says that's not what he meant — it always comes out wrong with Sami, and he doesn't know why.", c: "F", dh: -3, dd: 0 },
          { t: "He says of course he didn't mean anything by it — Sami knows him better than that.", c: "S", dh: -4, dd: 9 },
          { t: "He says Sami always twists his words — he can't say anything right in this house.", c: "H", dh: 8, dd: 8 },
        ],
      },
      {
        speaker: "A",
        src: "You forgot the word for 'wrong.' You said it in their language just now. You've forgotten how to be wrong with us in our own words.",
        intent:
          "This is grief, not attack — he heard his brother reach for home and miss. The lost word is the whole ten years of absence in a single syllable. He is not sure whether to mourn or to punish.",
        r: [
          { t: "He says Tarek reached for the word 'wrong' and it came out in the northern tongue — he's forgotten how to even be wrong with them in their own words.", c: "F", dh: 4, dd: 0 },
          { t: "He gently notes that Tarek's home language has gotten a little rusty, that's all.", c: "S", dh: -5, dd: 11 },
          { t: "He throws it in his face that Tarek can't even fight in his mother tongue anymore.", c: "H", dh: 10, dd: 6 },
        ],
      },
      {
        speaker: "B",
        src: "I know. I know I lost it. Do you think I don't hear it going, a little more every year? Ask him what he thinks I did up there — forgot you on purpose?",
        intent:
          "The exile's real wound, finally surfacing: the erosion of home inside him is a grief he carries alone in a country that doesn't know to grieve it. He is asking to be understood, and disguising it as a challenge.",
        r: [
          { t: "He says he knows he's losing it — a little more every year — and asks whether Sami thinks he forgot them on purpose.", c: "F", dh: 3, dd: 0 },
          { t: "He says he's sure it'll all come back to him now that he's home for a while.", c: "S", dh: -4, dd: 10 },
          { t: "He demands to know if Sami really thinks he abandoned them on purpose.", c: "H", dh: 9, dd: 6 },
        ],
      },
      {
        speaker: "A",
        src: "I think you left. That's all I know. I don't know what it cost you because you were never here to show me. Tell him that. Exactly that.",
        intent:
          "The most honest sentence either of them has managed. It is not an accusation — it is a confession of ignorance. He genuinely does not know what leaving cost his brother, and for the first time he is admitting he'd like to.",
        r: [
          { t: "He says: I think you left — that's all I know. He never saw what it cost you, because you were never here to show him.", c: "F", dh: 2, dd: 0 },
          { t: "He says he's sure it was hard on Tarek too, being so far from home all those years.", c: "S", dh: -4, dd: 12 },
          { t: "He says all he knows is that Tarek left, and left him holding everything.", c: "H", dh: 8, dd: 6 },
        ],
      },
      {
        speaker: "B",
        src: "It cost me this. This exact table. Every one of these nights I wasn't at it. You think I got the world? I got everywhere that isn't here.",
        intent:
          "This is the whole case in four sentences, and it is entirely true — and it does not cancel a single night Sami spent changing their father's sheets. Two true griefs, non-fungible. There is no exchange rate. There was never going to be one.",
        r: [
          { t: "He says it cost him this — this exact table, every night he wasn't at it. He didn't get the world; he got everywhere that isn't here.", c: "F", dh: 1, dd: 0 },
          { t: "He says he's missed them terribly, and he's just so happy to be home now.", c: "S", dh: -3, dd: 11 },
          { t: "He says Sami has no idea what real loneliness is — try being the one who left.", c: "H", dh: 9, dd: 7 },
        ],
      },
      {
        speaker: "A",
        src: "...Their mother is listening from the kitchen. She's been listening the whole time. Ask him — no. Don't ask him anything. Just tell him to pass me the bread.",
        intent:
          "He has decided to stop fighting, and he can't say so, so he is reaching for the smallest, oldest ritual they share instead. 'Pass me the bread' is the closest word for forgiveness he can find tonight. Carry the fight into it and you lose the peace he's offering.",
        r: [
          { t: "He says — their mother's been listening the whole time. Then, quietly: don't ask anything. Just tell Tarek to pass the bread.", c: "F", dh: -4, dd: 0 },
          { t: "He says it's getting late, and perhaps they should just enjoy the meal their mother made.", c: "S", dh: -5, dd: 9 },
          { t: "He says forget it — nothing's getting solved tonight — and tells Tarek to just pass the bread.", c: "H", dh: 6, dd: 7 },
        ],
      },
    ],
    outcomes: {
      RUPTURE: {
        confront: {
          from: "B",
          line:
            "Tarek finds you by the door as he leaves early, coat already on. \"You gave me every blade he threw and none of the tiredness behind them,\" he says. \"I heard my brother hate me tonight. I don't think that's all he meant.\" It wasn't. You know exactly what else he meant. You just didn't carry it.",
        },
        jump:
          "Tarek flew north two days early. The brothers didn't speak for the better part of a year — not out of hatred but out of the particular exhaustion of being misunderstood in the one place you're supposed to be known. Their mother phoned each of them separately every Sunday and translated between them the way you would not, softening on purpose, and slowly, clumsily, it healed at her speed instead of yours. She never told either son what the other had really said that night. Some interpreters know when to lie.",
      },
      FALSEPEACE: {
        confront: {
          from: "A",
          line:
            "Sami walks you out under the fig tree, an arm around your shoulder. \"You see? He's not so changed,\" he says warmly. \"We understood each other fine.\" But you smoothed every edge off both of them, and the two brothers who hugged goodbye were hugging two different men — each one you'd invented to spare the other.",
        },
        jump:
          "It was a lovely evening. Everyone said so. The brothers embraced and promised to visit and meant it in the moment. But nothing that needed saying got said — you'd rendered it all into pleasantness — and so the specific ache each carried went home with him untouched. Tarek still doesn't know his leaving is grieved as abandonment; Sami still doesn't know his staying is grieved as exile. They love each other across a distance neither can name, and they'll keep having lovely evenings that fix nothing, for years, until one of them is at a hospital bed wishing they'd fought properly just once.",
      },
      MESS: {
        confront: {
          from: "B",
          line:
            "Tarek stops you, genuinely lost. \"I don't know what I said wrong or what he said at all,\" he tells you. \"Half of it reached me backwards.\" It did. You carried a grief as a jab and a jab as a grief until neither brother could find the other in the noise.",
        },
        jump:
          "The night ended in a fog of half-meanings nobody could reassemble. Sami thought Tarek had mocked the life he'd stayed to protect; Tarek thought Sami had refused the pain he'd carried away. Neither had, exactly. But they left the table more foreign to each other than they'd sat down, and it took a family wedding three years later, and a great deal of wine, before either risked the truth again.",
      },
      UNDERSTANDING: {
        confront: {
          from: "A",
          line:
            "Sami passes the bread to Tarek himself, without waiting for you to say it. Then he looks at you. \"You let us be ugly to each other,\" he says. \"You didn't tidy us up. That's why we found the bottom of it.\" From the kitchen doorway, their mother is not saying anything at all, and smiling.",
        },
        jump:
          "They fought, truly, all the way down — because you let them, carrying each blow and each grief at its real weight — and somewhere near the bottom they hit the bedrock where two true losses sat side by side that could not be traded and did not need to be. Nothing was solved. The years apart were still the years apart. But Tarek stayed the extra two days, and on the last morning he asked Sami to teach him back the word he'd lost, and Sami did, badly, laughing, and that is how the language comes home — one wrong word at a time, out loud, between people who decided to stop protecting each other from the truth.",
      },
    },
  },
];
