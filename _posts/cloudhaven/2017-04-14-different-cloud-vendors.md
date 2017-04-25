---
layout: blogarticle
title: "Different Cloud Vendors"
meta: "See some popular cloud vendors here."
author: "George Davis"
source: "Personal writing"
category: "cloudhaven"
date: "April 14, 2017"
---

<ol>
    {% for vendor in site.data.cloud-vendors-list %}
        <li>
            <a href="#">{{vendor.title}}</a>
            <p>{{ vendor.oem | markdownify }}</p>
        </li>
    {% endfor %}
</ol>