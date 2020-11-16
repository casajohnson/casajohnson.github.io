---
layout: page
include_header: true
title: Projects
---
{% include image image_path="/assets/images/pages/projects01.jpg" alt="Projects picture" caption="Getting ready to work" %}
<ul>
    {% for project in site.projects %}
    <li>
        <h2>{{ project.name }}</h2>
        <h3>{{ project.position }}</h3>
        <p>{{ project.content | markdownify | remove: "<p>" | remove: "</p>" }}</p>
    </li>
    {% endfor %}
</ul>
