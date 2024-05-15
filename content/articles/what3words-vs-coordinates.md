---
title: Comparing what3words and the Geographic Coordinate System
description: A dive into the hype, myths and usefulness of the what3words coordinates system
draft: true
tags:
  - coordinates
  - what3words
  - navigation
category: reference
date: 2023-08-01 
---

Knowing and communicating where you are on Earth, is a critical skill for anyone undertaking work or adventure in remote areas. In this article, we will compare two ways to reference a place on earth – the traditional Geographic Coordinates System (geo-coordinates) and the newer what3words.
There are several perspectives through which we can compare these two systems, for example, businesses, delivery companies, ride-sharing companies etc. Given that Austere Risk deals with NGOs, exploration, expeditions and other remote medical and safety matters, this comparison will be aimed at answering the questions we receive from our clients and students who are undertaking work or adventure in remote areas. In other words, this article may not be relevant to businesses or teams using what3words for other purposes, such as a food delivery app communicating with a restaurant’s ordering system.
About the Geographic Coordinates System
The Geographic Coordinates System
About what3words
what3words is a system of providing a geographic reference to points on Earth consisting of:
A proprietary algorithm dividing the world into 3-meter x 3-meter squares, and assigning each square an address consisting of 3 words
Mobile apps and a web app
A paid API and other tools to incorporate the algorithm and software into other applications and devices such as vehicle navigators
A bold claim. © 2021 what3words Limited
Proprietary Algorithm
what3words uses a proprietary algorithm
Accuracy
It’s important to remember that with any geographic reference system, the accuracy is determined by the means that the reference was obtained, not by the system itself. In other words, what3words references a 3x3m point on earth, however, the mobile device’s own accuracy might only be accurate to 15m, meaning the what3words app will give you a 3x3m reference of where it thinks you are inside a 15x15m area – not necessarily the exact 3x3m square you are standing in. Most modern mobile devices however can achieve accuracy better than 15m; in our field survey work, we often get 4-5m accuracy in clear open areas from a regular mobile phone. For a person in a remote area requiring rescue, providing emergency services with a location reference accurate to 15m or 3m makes no difference to the outcome.
Factors that limit the accuracy of a location device include:
the power of the device and power allocated to location services
the quality and type of satellite positioning chipsets
user-defined location privacy settings, privacy apps and VPNs
the range of satellite systems that the device can connect to (i.e. GPS, GLONASS etc)
obstructions between the device and the sky such as tree canopies or terrain
the time the user allows the device to find satellites before transmitting the location, especially if the user has travelled a large distance between satellite fixes.
This table shows the accuracy of coordinates at the equator.
The accuracy of coordinates at the equator relevant to the number of decimal places
Transmitting a position using either coordinates or a what3words address makes no difference in terms of accuracy on the ground – accuracy depends on other factors.
Transmission Time
If the what3words reference or coordinates are transmitted via text (i.e. SMS, email) then the transmission time is a null point. Almost certainly the locations will be sent in a URL making it simple for the receiver to click the URL and be taken to a platform with the coordinates visible.
Here are some examples of locations embedded in URLs for a random point selected in outback Australia
This table looks at the time it takes to verbally transmit (i.e. via radio or satellite phone) each type of reference system using the same point on Earth that we used for the previous example.
Time taken to communicate a location verbally
Transmitting a what3words address with complete words where there is no ambiguity is faster than coordinates. Transmitting a what3words address where there might be ambiguity is slightly slower than coordinates.
Language and Accent Barriers
Team working across different countries or with team members with language or accent barriers may find using words more difficult to communicate than numbers. what3words is available in a number of languages and if a person is transmitting an address in their native language, then the address can be copied/pasted into the receiver’s app even if the receiver does not understand the language. This recent article from the BBC explains the frustrations of using what3words with accent barriers when the information has passed from emergency caller > emergency dispatch > rescue agency.
When it comes to voice transmission however things become more difficult when working across language barriers. For example, if a person verbally transmits an address over the radio in their native language and the receiver attempts to translate it using Google translate, or a local translator, the result will almost certainly be different due to the nature of languages and literal vs local translations.
This table shows three examples of transmitting a what3words address, then translating that address into English, using our point from above (https://w3w.co/surface.cobwebs.bruiser) in outback Australia.
Verbally translating what3words addresses
This table shows three examples of transmitting coordinates, then translating those coordinates into English, using our point from above (https://www.openstreetmap.org/?mlat=-25.15985&mlon=128.52609#map=19) in outback Australia.
Verbally translating coordinates
These tables demonstrate that translating a verbal what3words address using a translation service into another language is unlikely to be successful. The languages selected are three languages commonly spoken in the developing world. In the case of the Arabic and Swahili addresses, there was an incorrect number of words returned, and the French result returned the same word twice. The solution here for teams using what3words and working across different languages would be to implement a standardised language to transmit all locations if possible and use a text-based service to send clickable links, instead of voice transmission (phone, radio), wherever possible.
Coordinates use characters from the Hindu-Arabic whole number system, commonly known as English or Latin numbers, which are much more universal and easier to translate verbally. There is less room for ambiguity and even when the words representing numbers are transmitted by voice, there is a lower chance of an incorrect translation.
The English numerals used in coordinates are more universal, and are a better option across language barriers than what3words
Identifying a Point vs an Area
As we have learnt already, what3words identifies a 3m x 3m point on the earth with each identifier. This is great if you are trying to find a house, but what if you need to identify a region or area? Search and rescue agencies, disaster response teams, bushfire firefighting teams for example, often need to identify an area on earth by a village or large area (i.e. 1000m x 1000m or a 5km grid square) which can’t be achieved with what3words.
Use with Maps
Maps are not needed to simply identify a location with either what3words or coordinates, however, having a map can greatly improve confidence. For example, if a user can visually confirm that the application is providing a location on a map relative to a topographic feature, and the device I am using to collect the position confirms. In our example of the point in outback Australia (https://w3w.co/surface.cobwebs.bruiser), the visual confirmation that the user is in fact at a road T intersection would provide added confidence that the address is correct.
what3words does not load maps offline meaning the user must trust the device and algorithm is providing an accurate location, with no way to visually confirm. When a user does have an internet connection, the maps provided are Google Maps which is can range from excellent detail to almost no detail, depending usually on the size of the population (i.e. the number of customers) in the area. Google Maps is normally not suitable for teams working in remote areas.
A team that uses coordinates is not limited to areas of internet connectivity or to Google Maps to conduct operations. Using coordinates as a geographic location system allows the team or individual to use dedicated GPS devices with preloaded surveyed topographic maps, or one of the dozens of mobile applications with hundreds of maps sources, from proprietary to open-source, such as Humanitarian OpenStreetMap (HOTOSM)
The what3words/Google Maps combination is a simple solution for popular areas. For more reliable mapping, use coordinates with a dedicated GPS or mobile device and pre-loaded maps.
Conclusion
For its advertised use cases such as meeting friends, simple outdoor recreation, B2B and delivery services, what3words is a great system that is growing in popularity. Whether it provides a solution to areas of the developing world with no addresses remains to be seen. From a Search and Rescue perspective, any system that results in more lives being saved by using existing technology and a marketing strategy for mass adoption is a positive move. The issue remains however that what3words is proprietary, and there will almost certainly be a financial reason behind the marketing and mass adoption. If the same effort was put into teaching and promoting a standardised system of coordinates, that is not proprietary, then the same results would be achieved – but there is no financial gain in this.
Organisations such as the NATO militaries conduct operations using a non-proprietary geo-coordinate system that is not tied to an app (MGRS). Companies that promote free services for mass adoption must recover the cost of marketing and infrastructure somehow. Switching to a paid model, or selling consumer data are two common ways to achieve this. what3words may do neither and their privacy policy states it does not sell data to third parties. If what3words collapses as a company, organisations, businesses and the public who rely on it will revert back to coordinates, or jump on the next ‘innovative’ geo-reference system. As we’ve seen time and time again, if one company achieves success, there will be copy-cat companies with a slightly better system waiting to jump into the market and compete.
In conclusion, what3words does nothing special or different. It’s a shiny new gadget with great marketing, a great brand, and a simple smartphone application behind it, but it is subject to the same human errors (and to a lesser extend device errors) as a geo-coordinate reference system. An organisation that uses geo-coordinates with maps, dedicated GPS devices or smartphone apps, and conducts basic training will find no advantage to switching to what3words and should not make the change for internal use, however, if public adoption of what3words continues to increase and your organisation has a duty to serve the public (i.e. SAR, disaster response), adopting what3words, at least in part, into your operations may be necessary to achieve mission success.
Comparison Summary
Comparison of what3words and the Geographic Coordinates System features
If you would like to talk about incorporating the what3words API into your operations, please get in touch for a no-obligation chat.
