# Sahil's reflections and video growth plan

Reviewed on October 2, 2026. Based on the public channel listing and the descriptions of the two recent reflections and the MET College talk, not private YouTube Studio analytics.

## Editorial direction

The strongest current thread connects an everyday observation to a question about attention, identity, or intention. The phone recharge and phone upgrade videos already do this well. Mirar is a natural continuation of that inquiry.

Use three channel playlists:
- Reflections with Sahil: daily check-ins, attention, identity, and Mirar.
- Talks and Conversations: MET College and future speaking/podcast recordings.
- Life and Endurance: outdoor experiences and personal chapters.

Keep personal music and relationship videos on the channel, but feature the relevant reflections and speaking recordings on the professional website.

## Website implemented

- /#reflections: two recent reflections, actual thumbnails, inline players, Mirar and channel links.
- /#speaking: MET College talk with its real topic and Brahma Kumaris / Nasha Mukt Bharat Abhiyan attribution.
- /watch/your-phone-keeps-getting-upgraded
- /watch/phone-toh-charge-ho-gaya
- /watch/choose-purpose-over-addiction
- Each watch page has contextual text, related videos, a relevant CTA, canonical URL, social preview metadata, and VideoObject data.
- The sitemap includes the watch pages and video entries.
- Homepage player clicks send video_open to the existing Google Analytics setup. This measures opening the player, not completed views or watch time.

Videos are curated in src/lib/videos.ts. New uploads do not automatically appear. Add verified title, ID, topic, publication date, duration, description, attribution, and contextual paragraphs there. Keep summaries distinct from transcripts; do not invent transcript text or event affiliations.

## A repeatable release cycle

For each substantive video:
1. Publish the full video on YouTube with an accurate title, caption review, topic description, and the corresponding website watch-page link.
2. Add its website page and connect it to the next relevant action: Mirar, speaking invitation, or collaboration.
3. Cut two short clips, each built around one complete idea. Use those on Shorts, Instagram, and LinkedIn rather than posting the same long caption everywhere.
4. Write one LinkedIn post about the question behind the video and one short reflection on Threads/X. Link to the specific watch page, not the homepage.
5. Ask one useful question. Respond to substantive replies; use those questions to shape follow-up videos.
6. Add the next related video to end screens and playlists where eligible. Link to the watch page in the description and pinned comment where comments are enabled.

Start with one full reflection every 7-14 days and two clips from it. Increase volume only when the writing and filming cadence is sustainable.

## Next four topic experiments

- Phone charged, self unchecked: expand the existing attention reflection with a real everyday example.
- A belief that needs an update: revisit a definition of success without prescribing someone else's answer.
- Busy versus consciously chosen: a question about reactive days and intention.
- What endurance reveals: connect one training experience to resistance or consistency.

These are proposed topics, not claims about existing recordings.

## Distribution and invitations

Use campaign links, for example:
https://www.sahilharia.com/watch/phone-toh-charge-ho-gaya?utm_source=linkedin&utm_medium=social&utm_campaign=reflection_recharge

Change utm_source for instagram, youtube, or threads. Keep campaign names stable for the same release.

For speaking outreach, share the MET College page as evidence and tailor the note to the audience. Credit Brahma Kumaris as the initiative organizer; do not imply an ongoing partnership or endorsement of Mirar.

Channel issue found: the MET College description invites comments, but its public page currently says comments are turned off. Review that setting before encouraging discussion.

## Measure what matters

Review after four releases rather than setting unsupported growth guarantees.
- YouTube Studio: impressions, thumbnail CTR, first-30-second retention, average view duration, returning viewers, and subscribers per video.
- Website GA: watch-page sessions by campaign, homepage video_open events, outbound Mirar clicks, and contact/booking clicks.
- Inquiries: qualified speaking, collaboration, and Mirar conversations that mention a video. Ask what brought the visitor in if attribution is unclear.

Compare each release with the channel's own baseline. A public view count cannot tell us which thumbnail, hook, or distribution source caused a result.

## Later automation

If upload frequency grows, use a scheduled server-side YouTube feed/API sync with a review step before publishing titles and summaries. Keep API credentials server-side and retain manual editorial control for personal videos. No sync or new email newsletter subscription was enabled in this update.

## Reference guidance

- Google dedicated watch pages and video discoverability: https://developers.google.com/search/docs/appearance/video
- YouTube titles and thumbnails: https://support.google.com/youtube/answer/12340300
- YouTube discovery and retention: https://support.google.com/youtube/answer/141805

Structured metadata makes content understandable; it does not guarantee indexing, video rich results, traffic, or inquiries.
