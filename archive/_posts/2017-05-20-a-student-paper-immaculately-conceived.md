---
layout: post
include_header: true
title: A Student Paper, Immaculately Conceived
date: 2017-05-20T20:29:46+00:00
excerpt: 'Detecting and deterring student cheating is a daily battle in university life. I lost today’s battle, but am now better prepared for tomorrow’s.'
image:
  path: /assets/images/posts/St+Joan%27s+Chapel.jpg
  caption: "St. Joan of Arc Chapel"
category: archive, academe, notes for students
---
We professors despise the necessary task of submitting students’work to the crucible of online plagiarism checkers like Turnitin and Grammarly. We would much rather trust that the document we receive is the student's product, conceived and produced by them in its entirety. To that end we construct writing assignments with unique aims, such as specific questions to be answered, or mixtures of texts to be inter-related, to reduce the student's ability to nab ill-fitting information out on the Internet that they might copy-and-paste into their paper. A two-page personal reflection paper assignment on Hamlet’s Soliloquy is an open invitation to cheating. But a paper on the Canaanite woman’s faith in the Gospel of Matthew (15:21-28), considered as to its literary, ideological, and communal meanings, creates a smaller target for the plagiarist’s arrow. Because colleges and universities around the country have been bitten by plagiarism, we now employ technology to determine what percent of a student’s paper is identical or similar to other material found on the Internet, or even to material submitted by students at other institutions. We incorporate this technology in our online teaching tools—Marquette’s D2L system uses Turnitin—so that instructors can see what percentage of an incoming paper has commonality with external sources. If the percentage is high, our jaundiced eye investigates; if it is low we can relax, and get about the business of grading the paper. But the woeful fact remains that today the student is presumed guilty until proven innocent by Turnitin.

How happy I was, then, to see low Turnitin percentages as I reviewed student papers this past semester. Most of the papers had 10% or less of ‘non-original material’ in the paper, which is not a surprise, since in a Theology class it is expected that students will quote key biblical passages that are doubtless quoted country-wide in other papers. A solitary paper of 33% alarmed until I realized that the student had quoted a lengthy bible text, but had failed to provide a closing quotation mark—Turnitin can be instructed to ignore passages where a paper begins and ends a sentence with quotation marks, since such marks announce the recognized use of another's material. So this case was a typo-by-omission, and a non-original-score-by-typo. Phew.

Another paper was solitary for a different reason; its Turnitin non-originality score was 0.0%, an immaculate score. It shared _nothing_ with anything out on the Internet or in Turnitin's data-store of submitted papers. This was a paper to be read with appreciation, not suspicion, especially because the student-author was someone for whom English was a second language, and whose native tongue was Asian (Mandarin), and not another Western language whose words and phrasing might be similar. As to the structure, content, and language of the thing, it was a good paper. Really good.

Too good.

Would a freshman in their second semester in the US fluidly write something like “Daniel defied King Nebuchadnezzar when the latter insisted that...”? Defy? Former and latter? Insist? The paper had other sterling moments: Oxford commas, perfect North American placement of a comma _inside_ a single or double-quotation mark (and not outside, as is the custom in Britain).

My discomfort grew when I reviewed a recent test in which my students provided short answers of 5–7 sentences to four given questions. This student’s hand-written answers were airport-English at best, and nothing approaching the submitted paper’s elegance. Such disparity. What’s happening?

To make sure that Turnitin had not failed, I copied and pasted paragraphs from the student's paper into Google, Bing, and DuckDuckGo, to see whether there were swathes of text shared by the paper and other sources on the Internet. No hits. Was it possible that the student had submitted something perfect?

I decided to take the file the student submitted, and look it over. D2L allows one to read a file online, within the D2L system, where it shows up as a typical APA or Chicago Manual of Style paper. Everything seemed fine there. So to be sure I downloaded the student's original Microsoft Word file and studied it. It was there that things became more opaque, precisely because they became more transparent. Here is what happened.

## Absence of Evidence

The student’s Microsoft Word file checked out okay on basic data points. Its creation date was the date the file was last saved, and was also the date the paper was due, a not unusual fact: the student started to work on the assignment the day it was due. To have a point of comparison I opened up the Word file for a student I know had worked on the paper over the course of a week (because I helped her). Her file’s creation date was a week before the date the file was last saved. No surprises so far, but I was no closer to solving my mystery.

Then I remembered something.

Years back a colleague told me about perplexity he had using Microsoft Word. When he needed to print a Word document that he had written, he opened the document, issued the print command (Ctrl-P in Word), saw that the document printed, and then sought to exit Word. Each time he did this, however, Word would prompt him to save the file he had just printed, even though he had made no changes to it. No changing the fonts or margins, correcting a typo, or anything else. Yet without fail Word thought that he had modified the document. And this behavior was driving him nuts. What was going on?

My colleague was wrong to say that the document had not been modified. Yes, he had not made modifications to the document’s content, but by printing the document he was changing the last date on which the document had been printed, and Word keeps track of that date inside the file via its PrintDate field, which is not directly visible to the user. The writing in the document had not changed, but its metadata had. And Word prompts the user to save any changes. Mystery solved.

Remembering my colleague’s mystery reminded me that Word keeps track of other data inside the document, such as the author and author’s company, if the user/author had filled in those basic fields when installing Word or Microsoft Office (usually upon the first startup of the application). Going forward a newly created document will always have that information inside the document’s metadata (which you can see by opening any given document's properties).

The document I currently had open was the paper of the student I had helped, so I opened up the properties for her document (File - Properties in Word for Mac 2016) and, sure enough, I could see her name and company (Marquette University in her case, as she must have availed herself of the University's site license for Office 365).

{% include image image_path="/assets/images/posts/img-000.png" alt="Properties Box for Word document" caption="My student's properties box, with her information" %}

When I opened and went to the properties of my suspect paper, here is what I found:

{% include image image_path="/assets/images/posts/cheating-suspect000.png" alt="Properties Box for Word document" caption="Suspect document, with **no** user information" %}

Hmmmm. This was odd, as I remember always seeing in my own documents and those of colleagues at least _something_ in the Author field, and usually something in the Company field. I opened up every one of the other 37 documents from my class—okay, I was becoming a tad obsessed—and found that each document had at least a name in the Author field, and about half the time something in the Company field. I also learned that I could delete and replace the name that was in the Author field, or delete it and leave the field blank.

The Statistics tab at the top of window invited me to dig deeper, so I returned to the paper of the student I had helped, and looked at her document’s statistics.

{% include image image_path="/assets/images/posts/img-002.png" alt="Properties Box for Word document" caption="My student's document statistics" %}

If I read things correctly, over the course of three days she had written a document of six paragraphs in four pages, devoting about four-and-a-third total hours to the thing, saving it twelve times. Now, what about my suspect document?

{% include image image_path="/assets/images/posts/cheating-suspect001.png" alt="Properties Box for Word document" caption="Suspect documents's statistics: a paper with no work" %}

In this case the student had created a new document in the morning, left the document opened for five hours, and then authored a five-page paper in _no time flat_, saving it for a first and only time, and then exiting. This document appeared out of nowhere, and had zero for a Turnitin score: an immaculate conception.

Checking again the properties of other students’papers, I could see that they were saving their document multiple times, and working on it for multiple hours. How does one create and author a four-page paper in zero minutes of total editing time?

Then it hit me: maybe for Microsoft Word pasting something into a blank document does not count as editing, and if one does paste something in, save the document, and then exit, one could have what I had here: a four-page document that was never edited. Testing my hypothesis, I opened up a document containing 20 pages of formatted text, selected and then copied the whole contents, created a new document, pasted everything into the new document, saved it (providing a document name), and then exited. After a few seconds I opened up the new document, went to the Properties dialog box, and selected the Statistics. Here’s what I got:

{% include image image_path="/assets/images/posts/img-mfj.png" alt="Properties Box for Word document" caption="My test document: Create, paste in, save and entitle, read statistics." %}

The statistics were like those of the suspect document: a single saving of the document, multiple pages of text, but no editing time at all. The conclusion seems inescapable: the student had an entire document from some source, copied its contents, pasted them into a fresh, new document, and then saved that document.

Why would someone chose this circuitous route to submitting a paper? It seems that a student who wrote a document from beginning to end would not worry about any detritus in it (e.g., the kind of things that would appear if one had been tracking changes, or inserting comments). After all, all the work in the document was the student’s own. But a student who co-wrote a paper with someone else might have used track changes, and those changes might be visible if someone with know-how made them visible in the original, submitted document. Or, a student who purchased a paper on the Internet, and then received that document via some delivery mechanism, might want to move the contents from the original, delivered document, to a fresh Word document, since track changes do not carry over when pasted into the new document; everything appears untouched to the reader of the new Word document.

It is certain that something was wrong here, but the evidence of wrong-doing is in truth a privation: what is wrong with the suspect paper is the fact that nothing is wrong with it, and that it took no time to write it. How does one prove a commission of academic dishonesty from a zero?

## Of course, you realize, this means war!

The day will come when there are other suspect documents, so I wrote a one-click macro for Microsoft Word that tells me for how many minutes a document has been edited, and how many times it has been saved:

{% include image image_path="/assets/images/posts/img-macro.png" alt="Of course, you realize, this means war!" %}

Should a paper be an immaculate conception, like my suspect document, I’m developing other techniques of investigation. But of course I’m not going to show my playbook here.

This battle may have been lost, but the war ain’t over.
