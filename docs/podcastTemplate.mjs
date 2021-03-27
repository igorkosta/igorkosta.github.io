export function createFeed(podcast) {
return `<?xml version="1.0" encoding="utf-8"?>
<rss xmlns:atom="http://www.w3.org/2005/Atom" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" xmlns:itunesu="http://www.itunesu.com/feed" version="2.0">
<channel>
<link>${podcast.website}</link>
<language>en-us</language>
<copyright>&#xA9;2018</copyright>
<webMaster>${podcast.webmaster.email} (${podcast.webmaster.name})</webMaster>
<managingEditor>${podcast.editor.email} (${podcast.editor.name})</managingEditor>
<image>
   <url>${podcast.image.url}</url>
   <title>${podcast.image.title}</title>
   <link>${podcast.website}</link>
</image>
<itunes:owner>
   <itunes:name>${podcast.owner.name}</itunes:name>
   <itunes:email>${podcast.owner.email}</itunes:email>
</itunes:owner>
<itunes:category text="${podcast.category}">
   <itunes:category text="${podcast.subCategory}" />
</itunes:category>
<itunes:keywords>${podcast.keywords}</itunes:keywords>
<itunes:explicit>${podcast.explicit}</itunes:explicit>
<itunes:image href="${podcast.image.url}" />
<atom:link href="${podcast.feedUrl}" rel="self" type="application/rss+xml" />
<pubDate>Fri, 05 Oct 2018 09:00:00 GMT</pubDate>
<title>${podcast.title}</title>
<itunes:author>${podcast.author}</itunes:author>
<description>${podcast.description}</description>
<itunes:summary>${podcast.description}</itunes:summary>
<itunes:subtitle>${podcast.subtitle}</itunes:subtitle>
<lastBuildDate>${podcast.episodes[0].pubDate}</lastBuildDate>

<!--REPEAT THIS BLOCK FOR EACH EPISODE-->
${podcast.episodes.map(episode => {
return `<item>
   <title>${episode.title}</title>
   <description>${episode.description}</description>
   <itunes:summary>${episode.description}</itunes:summary>
   <itunes:subtitle>Subtitle</itunes:subtitle>
   <itunesu:category itunesu:code="112" />
   <enclosure url="${episode.url}" type="audio/mpeg" length="1" />
   <guid>${episode.url}</guid>
   <itunes:duration>${episode.duration}</itunes:duration>
   <pubDate>${episode.pubDate}</pubDate>
</item>`
}).join('')}
<!--END REPEAT-->

</channel>
</rss>`
}
