---
title: "HMD Diagnostics"
author: "Team HMD"
date: '2023-05-23'
output: 
  bookdown::gitbook:
    css: style.css
description: This is a bookdown::gitbook document containing the Diagnostic graphs for an HMD country
  The output format for this example is bookdown::gitbook.
documentclass: book
github-repo: rstudio/bookdown-demo
link-citations: yes
site: bookdown::bookdown_site

---


# Introduction {-}


<h3> General data quality checks </h3>
<ol class="toclist">
<li> Chart of raw population data from input database (IDB) by calendar year, age, and sex <br> Confirm range of age intervals across time is correct. [link](#generalrawpop)  </li>
<li> Chart of raw deaths counts from input database (IDB) by calendar year, age-interval, and sex<br> Confirm range of age intervals across time is correct. [link](#rawdeath) </li>
<li> Lexis map of Lexis database (LDB) by calendar year, age, and sex. <br>	Confirm that data in LDB make sense. [link](#generallexis) </li>
<li> Chart of outliers in distribution of deaths in age range prior to open age interval (OAI) <br> Check that procedure for smoothing deaths before fitting model to split OAI is reasonable. [link](#mortalitydeviations)</li>
</ol>
<h3> Internal consistency checks </h3>
<ol start="5" class="toclist">
<li> Chart of total number of deaths by year for IDB versus LDB by sex <br>	Total from IDB should match exactly to total in LDB. [link](#totaldeaths)</li>
<li> Chart of total January 1st population by year for IDB versus LDB by sex	<br> Total from IDB should track close to total in LDB. [link](#totalpop)</li>
<li> Chart of deaths within age groups (under 5, 5 to 64, 65 or higher, 85 or higher) by year for IDB versus LDB	<br> For each age group specific chart, IDB should track close to LDB. [link](#intcondeathagesex)</li>
<li> Chart of population size within age groups (under 5, 5 to 64, 65 or higher, 85 or higher) by year for IDB versus LDB	<br> For each age group specific chart, IDB should track close to LDB. [link](#intconpopagesex)</li>
</ol>
<h3> Internal plausibility checks </h3>
<ol start="9" class="toclist">
<li> Chart of death rates by age and sex for each year (based on mltper_1x1.csv/fltper_1x1.csv located in output directory for country!!!) <br>	Identify strange patterns in death rates for males versus females. [link](#deathrateagesex)</li>
<li> Chart of death rates by year and sex for each age (based on mltper_1x1.csv/fltper_1x1.csv located in output directory for country!!!) <br>	Identify strange patterns in death rates for males versus females. [link](#deathratetimesex)</li>
<li> Chart of mortality deviations compared with adjacent ages. Note that the number of neighboring ages and/or years as well as the p-values for X and the size of R can be modified prior to running the batch program. <br>	Expect to see large negative deviations at age 1 versus age 0. Patterns of large deviations, e.g., at ages ending in "0" or "5", may indicate problematic places in the mortality surface. [link](#mortdevageyear)</li>
<li> Lexis map of total net migration.	<br> Migration patterns should make sense. Should not show net migration above age 80 (unless there are territorial changes). [link](#netmig)</li>
</ol>
<h3> External plausibility checks </h3>
<ol start="13" class="toclist">
<li> Chart of total net migration by calendar year and sex <br>	Might be used to check that pattern of implied migration is consistent with any available migration data. [link](#impliedmig)</li>
<li> Chart of life expectancy at ages 0, 65, and 80 by sex compared to Sweden <br>	Might be used to check pattern of life expectancy with Sweden as the benchmark. [link](#lifeswe)</li>
</ol>
<h3> Internal consistency of old vs. new data </h3>
<ol start="15" class="toclist">
<li> Chart of ratio of new vs. old raw and adjusted mortality rates in life table data <br>	Might be used to locate large discrepancies between old and new data. CS should look at graphs in 16 and 17 to understand whether differences are due to changes in numerators, denominators, or both. [link](#newoldmortrate)</li>
<li> Chart of ratio of new vs. old death counts in Lexis database <br>	Might be used to locate large discrepancies between old and new data. [link](#newolddeath)</li>
<li> Chart of ratio of new vs. old population counts in Lexis database <br>	Might be used to locate large discrepancies between old and new data. [link](#newoldpop)</li>
<li> Chart of mortality sex ratio surface [link](#mortsexratio)</li>
</ol>



```
## [1] "0.0.0.9012"
```

<!--chapter:end:00-Introduction.Rmd-->

# Raw Population Counts {#generalrawpop}

Raw Population Counts: population and births by type of source

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generalrawpopF-1.png" alt="Raw Population Counts: population and births by type of source" width="792" />
<p class="caption">(\#fig:generalrawpopF)Raw Population Counts: population and births by type of source</p>
</div>
## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generalrawpopM-1.png" alt="Raw Population Counts: population and births by type of source" width="792" />
<p class="caption">(\#fig:generalrawpopM)Raw Population Counts: population and births by type of source</p>
</div>

<!--chapter:end:01-RawPopulationCounts.Rmd-->

#  Raw Deaths Lexis Diagram {#rawdeath}
The background color of the lexis element reflects the nature of the age interval: A dark gray background indicates a closed, a light gray background indicates an open-ended age interval. The outline color of the lexis element is blue for ages of 130 or less, red otherwise.

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generalrawdeathsF-1.png" alt="Raw Deaths Lexis Map" width="95%" />
<p class="caption">(\#fig:generalrawdeathsF)Raw Deaths Lexis Map</p>
</div>

## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generalrawdeathsM-1.png" alt="Raw Deaths Lexis Map" width="95%" />
<p class="caption">(\#fig:generalrawdeathsM)Raw Deaths Lexis Map</p>
</div>

<!--chapter:end:02-RawDeathsLexis.Rmd-->

# Lexis Map of Lexis database (LDB) by calendar year, age, and sex {#generallexis}

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generallexisDBF-1.png" alt="Lexis Map of Lexis database" width="95%" />
<p class="caption">(\#fig:generallexisDBF)Lexis Map of Lexis database</p>
</div>

## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generallexisDBM-1.png" alt="Lexis Map of Lexis database" width="95%" />
<p class="caption">(\#fig:generallexisDBM)Lexis Map of Lexis database</p>
</div>

<!--chapter:end:03-general_lexisDB.Rmd-->

# Deviations from smoothed deaths  {#mortalitydeviations}


```
## No outlier data found to process....
```

<!--chapter:end:04-deathoutliers.Rmd-->

# Total deaths by sex {#totaldeaths}

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsF-1.png" alt="Total deaths by sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsF)Total deaths by sex</p>
</div>

## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsM-1.png" alt="Total deaths by sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsM)Total deaths by sex</p>
</div>

<!--chapter:end:05-plotIntconDeaths.Rmd-->

# Total population by sex {#totalpop}

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generalplotIntConPopF-1.png" alt="Internal consistency: total population by sex" width="576" />
<p class="caption">(\#fig:generalplotIntConPopF)Internal consistency: total population by sex</p>
</div>

## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/generalplotIntConPopM-1.png" alt="Internal consistency: total population by sex" width="576" />
<p class="caption">(\#fig:generalplotIntConPopM)Internal consistency: total population by sex</p>
</div>

<!--chapter:end:06-general_plotIntConPop.Rmd-->

# Internal Consistency: deaths by age and sex {#intcondeathagesex}

## Females

### Age 0-4
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsF04-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsF04)Internal consistency: deaths by age and sex</p>
</div>
### Age 5-64
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsF564-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsF564)Internal consistency: deaths by age and sex</p>
</div>
### Age 65+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsF65-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsF65)Internal consistency: deaths by age and sex</p>
</div>
### Age 85+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsF85-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsF85)Internal consistency: deaths by age and sex</p>
</div>

## Males

### Age 0-4
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsM04-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsM04)Internal consistency: deaths by age and sex</p>
</div>
### Age 5-64
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsM564-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsM564)Internal consistency: deaths by age and sex</p>
</div>
### Age 65+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsM65-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsM65)Internal consistency: deaths by age and sex</p>
</div>
### Age 85+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeathsM85-1.png" alt="Internal consistency: deaths by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeathsM85)Internal consistency: deaths by age and sex</p>
</div>

<!--chapter:end:07-plotIntConDeaths.Rmd-->

# Internal consistency: population by age and sex {#intconpopagesex}


## Females
### Age 0-4
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/intconpopbyage04F-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:intconpopbyage04F)Internal consistency: population by age and sex</p>
</div>
### Age 5-64
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/intconpopbyage064F-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:intconpopbyage064F)Internal consistency: population by age and sex</p>
</div>
### Age 65+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeaths64pF-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeaths64pF)Internal consistency: population by age and sex</p>
</div>
### Age 85+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeaths86pF-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeaths86pF)Internal consistency: population by age and sex</p>
</div>

## Males
### Age 0-4
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/intconpopbyage04M-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:intconpopbyage04M)Internal consistency: population by age and sex</p>
</div>
### Age 5-64
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/intconpopbyage064M-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:intconpopbyage064M)Internal consistency: population by age and sex</p>
</div>
### Age 65+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeaths64pM-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeaths64pM)Internal consistency: population by age and sex</p>
</div>
### Age 85+
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntConDeaths86pM-1.png" alt="Internal consistency: population by age and sex" width="576" />
<p class="caption">(\#fig:plotIntConDeaths86pM)Internal consistency: population by age and sex</p>
</div>

<!--chapter:end:08-intcon_popbyage.Rmd-->

# Death rates by age and sex {#deathrateagesex}

Chart of death rates by age and sex for each year (based on mltper_1x1.csv/fltper_1x1.csv located in output directory for country)

<!-- <link rel="stylesheet" href="https://www.mortality.org/Public/sashmd.css" type="text/css"></link> -->
<!-- <script type="text/javascript" src="https://www.mortality.org/Public/slideshow.js"></script> -->
<script type="text/javascript" src="slideshow.js"></script>
<script type="text/javascript">
<!--
SLIDES = new slideshow("SLIDES");
// For a self-running slideshow you can set the delay between slides.
// 3000 = 3 seconds
SLIDES.timeout = 500;
// By default, all of the slideshow images are prefetched.
// You can set the prefetch variable if you have a large number
// of slides.
SLIDES.prefetch = 1;
// By default the slideshow will repeat when you get to the end.
// If this is set to false though, the controls do not work!!!
// SLIDES.repeat = false;
//-->



s = new slide();
s.src  = "intpls_deathratesY1971.png";
s.link = "intpls_deathratesY1971.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1972.png";
s.link = "intpls_deathratesY1972.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1973.png";
s.link = "intpls_deathratesY1973.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1974.png";
s.link = "intpls_deathratesY1974.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1975.png";
s.link = "intpls_deathratesY1975.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1976.png";
s.link = "intpls_deathratesY1976.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1977.png";
s.link = "intpls_deathratesY1977.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1978.png";
s.link = "intpls_deathratesY1978.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1979.png";
s.link = "intpls_deathratesY1979.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1980.png";
s.link = "intpls_deathratesY1980.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1981.png";
s.link = "intpls_deathratesY1981.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1982.png";
s.link = "intpls_deathratesY1982.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1983.png";
s.link = "intpls_deathratesY1983.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1984.png";
s.link = "intpls_deathratesY1984.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1985.png";
s.link = "intpls_deathratesY1985.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1986.png";
s.link = "intpls_deathratesY1986.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1987.png";
s.link = "intpls_deathratesY1987.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1988.png";
s.link = "intpls_deathratesY1988.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1989.png";
s.link = "intpls_deathratesY1989.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1990.png";
s.link = "intpls_deathratesY1990.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1991.png";
s.link = "intpls_deathratesY1991.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1992.png";
s.link = "intpls_deathratesY1992.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1993.png";
s.link = "intpls_deathratesY1993.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1994.png";
s.link = "intpls_deathratesY1994.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1995.png";
s.link = "intpls_deathratesY1995.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1996.png";
s.link = "intpls_deathratesY1996.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1997.png";
s.link = "intpls_deathratesY1997.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1998.png";
s.link = "intpls_deathratesY1998.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY1999.png";
s.link = "intpls_deathratesY1999.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2000.png";
s.link = "intpls_deathratesY2000.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2001.png";
s.link = "intpls_deathratesY2001.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2002.png";
s.link = "intpls_deathratesY2002.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2003.png";
s.link = "intpls_deathratesY2003.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2004.png";
s.link = "intpls_deathratesY2004.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2005.png";
s.link = "intpls_deathratesY2005.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2006.png";
s.link = "intpls_deathratesY2006.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2007.png";
s.link = "intpls_deathratesY2007.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2008.png";
s.link = "intpls_deathratesY2008.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2009.png";
s.link = "intpls_deathratesY2009.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2010.png";
s.link = "intpls_deathratesY2010.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2011.png";
s.link = "intpls_deathratesY2011.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2012.png";
s.link = "intpls_deathratesY2012.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2013.png";
s.link = "intpls_deathratesY2013.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2014.png";
s.link = "intpls_deathratesY2014.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2015.png";
s.link = "intpls_deathratesY2015.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2016.png";
s.link = "intpls_deathratesY2016.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2017.png";
s.link = "intpls_deathratesY2017.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2018.png";
s.link = "intpls_deathratesY2018.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2019.png";
s.link = "intpls_deathratesY2019.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesY2020.png";
s.link = "intpls_deathratesY2020.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);

</script>

<!-- <style type="text/css">  -->

<!-- TD.nav { -->
<!-- text-color: #000000; -->
<!-- text-align : center; -->
<!-- font-size : 1.8em; -->
<!-- background-color : #FFFFFF; -->
<!-- color : #000000; -->
<!-- padding:0.5em; -->
<!-- } -->
<!-- TD.nav2 { -->
<!-- text-align : center; -->
<!-- font-size : 1.8em; -->
<!-- background-color : #FFFFFF; -->
<!-- border : solid; -->
<!-- border-color: #FFFFFF; -->
<!-- border-width: .1; -->
<!-- padding:0.5em; -->
<!-- } -->

<!-- </style> -->

<!-- <script> -->
<!-- ```{r print1, echo=F, results="asis"} -->
<!-- cat("function myFunction() {\ndocument.getElementById(\"demo\").innerHTML = \"Paragraph changed.\";\n}") -->
<!-- ``` -->
<!-- </script> -->

<!-- <p id="demo">A Paragraph.</p> -->

<!-- <button type="button" onclick="myFunction()">Try it</button> -->

<!-- <img src="intpls_deathratesY2017.png"> -->



<body class="center" onLoad="SLIDES.update()">

<h3>Diagnostic Charts for HMD Project - Country: NSW (NSW)</h3>
<h3>Internal plausibility - Death rates by age for each year</h3>
<hr />
<table>
<tr><td colspan="2">
<img name="SLIDESIMG" src="intpls_deathratesY1950.png" alt="Slideshow image" />
</td></tr>
<tr><td class="nav">
Slide Controls:<br />
<table>
<tr>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.next();SLIDES.play();return false;">START</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.pause();return false;">STOP</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.hotlink();return false;">VIEW</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.previous();return false;">PREVIOUS</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.next();return false;">NEXT</A>
</td>
</tr>
</table></td>

<td class="nav">Delay (Seconds): <br /><table>
<tr>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=500;">0.25</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=500;">0.5</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=1000;">1</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=1500;">1.5</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=2000;">2</A>
</td>
</tr>
</table></td></tr>
<tr><td colspan="2" class="nav">
Go to year:
<a href="javascript:void(0)"
onClick="SLIDES.goto_slide(0);return false;">1971 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(4);return false;">1975 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(9);return false;">1980 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(14);return false;">1985 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(19);return false;">1990 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(24);return false;">1995 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(29);return false;">2000 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(34);return false;">2005 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(39);return false;">2010 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(44);return false;">2015 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(49);return false;">2020 </A>

</td></tr>
</table>
<script type="text/javascript">
<!--
if (document.images) {
  SLIDES.image = document.images.SLIDESIMG;
  SLIDES.update();
  SLIDES.play();
}
//-->
</script>
<hr />
<!-- <table> -->
<!--   <tr> -->
<!--     <td class="footerl" valign="top" width="360"><address><a href="mailto:hmd@demog.berkeley.edu">Beate Danielsen: hmd@demog.berkeley.edu</a> </address></td> -->
<!--     <td class="footerr" valign="top" width="360"><em>Last Updated:<br />October 15, 2018 -->
<!--         </em><br /><a href="http://validator.w3.org/check/referer"> -->
<!--         <img height="31" alt=" [Valid XHTML 1.0!] " src="https://www.mortality.org/Public/valid-xhtml10.png"  width="88" /></a> </td> -->
<!--   </tr> -->
<!-- </table> -->
</body>

<!--chapter:end:09-intpls_deathratesbyyear.Rmd-->

# Death rates over time by sex {#deathratetimesex}

Chart of death rates over time by sex for a given age.

<!-- <link rel="stylesheet" href="https://www.mortality.org/Public/sashmd.css" type="text/css"></link> -->
<!-- <script type="text/javascript" src="https://www.mortality.org/Public/slideshow.js"></script> -->
<script type="text/javascript" src="slideshow.js"></script>
<script type="text/javascript">
<!--
SLIDES = new slideshow("SLIDES");
// For a self-running slideshow you can set the delay between slides.
// 3000 = 3 seconds
SLIDES.timeout = 500;
// By default, all of the slideshow images are prefetched.
// You can set the prefetch variable if you have a large number
// of slides.
SLIDES.prefetch = 1;
// By default the slideshow will repeat when you get to the end.
// If this is set to false though, the controls do not work!!!
// SLIDES.repeat = false;
//-->



s = new slide();
s.src  = "intpls_deathratesA0.png";
s.link = "intpls_deathratesA0.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA1.png";
s.link = "intpls_deathratesA1.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA2.png";
s.link = "intpls_deathratesA2.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA3.png";
s.link = "intpls_deathratesA3.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA4.png";
s.link = "intpls_deathratesA4.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA5.png";
s.link = "intpls_deathratesA5.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA6.png";
s.link = "intpls_deathratesA6.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA7.png";
s.link = "intpls_deathratesA7.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA8.png";
s.link = "intpls_deathratesA8.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA9.png";
s.link = "intpls_deathratesA9.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA10.png";
s.link = "intpls_deathratesA10.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA11.png";
s.link = "intpls_deathratesA11.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA12.png";
s.link = "intpls_deathratesA12.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA13.png";
s.link = "intpls_deathratesA13.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA14.png";
s.link = "intpls_deathratesA14.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA15.png";
s.link = "intpls_deathratesA15.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA16.png";
s.link = "intpls_deathratesA16.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA17.png";
s.link = "intpls_deathratesA17.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA18.png";
s.link = "intpls_deathratesA18.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA19.png";
s.link = "intpls_deathratesA19.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA20.png";
s.link = "intpls_deathratesA20.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA21.png";
s.link = "intpls_deathratesA21.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA22.png";
s.link = "intpls_deathratesA22.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA23.png";
s.link = "intpls_deathratesA23.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA24.png";
s.link = "intpls_deathratesA24.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA25.png";
s.link = "intpls_deathratesA25.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA26.png";
s.link = "intpls_deathratesA26.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA27.png";
s.link = "intpls_deathratesA27.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA28.png";
s.link = "intpls_deathratesA28.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA29.png";
s.link = "intpls_deathratesA29.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA30.png";
s.link = "intpls_deathratesA30.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA31.png";
s.link = "intpls_deathratesA31.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA32.png";
s.link = "intpls_deathratesA32.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA33.png";
s.link = "intpls_deathratesA33.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA34.png";
s.link = "intpls_deathratesA34.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA35.png";
s.link = "intpls_deathratesA35.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA36.png";
s.link = "intpls_deathratesA36.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA37.png";
s.link = "intpls_deathratesA37.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA38.png";
s.link = "intpls_deathratesA38.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA39.png";
s.link = "intpls_deathratesA39.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA40.png";
s.link = "intpls_deathratesA40.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA41.png";
s.link = "intpls_deathratesA41.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA42.png";
s.link = "intpls_deathratesA42.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA43.png";
s.link = "intpls_deathratesA43.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA44.png";
s.link = "intpls_deathratesA44.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA45.png";
s.link = "intpls_deathratesA45.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA46.png";
s.link = "intpls_deathratesA46.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA47.png";
s.link = "intpls_deathratesA47.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA48.png";
s.link = "intpls_deathratesA48.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA49.png";
s.link = "intpls_deathratesA49.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA50.png";
s.link = "intpls_deathratesA50.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA51.png";
s.link = "intpls_deathratesA51.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA52.png";
s.link = "intpls_deathratesA52.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA53.png";
s.link = "intpls_deathratesA53.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA54.png";
s.link = "intpls_deathratesA54.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA55.png";
s.link = "intpls_deathratesA55.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA56.png";
s.link = "intpls_deathratesA56.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA57.png";
s.link = "intpls_deathratesA57.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA58.png";
s.link = "intpls_deathratesA58.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA59.png";
s.link = "intpls_deathratesA59.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA60.png";
s.link = "intpls_deathratesA60.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA61.png";
s.link = "intpls_deathratesA61.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA62.png";
s.link = "intpls_deathratesA62.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA63.png";
s.link = "intpls_deathratesA63.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA64.png";
s.link = "intpls_deathratesA64.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA65.png";
s.link = "intpls_deathratesA65.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA66.png";
s.link = "intpls_deathratesA66.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA67.png";
s.link = "intpls_deathratesA67.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA68.png";
s.link = "intpls_deathratesA68.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA69.png";
s.link = "intpls_deathratesA69.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA70.png";
s.link = "intpls_deathratesA70.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA71.png";
s.link = "intpls_deathratesA71.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA72.png";
s.link = "intpls_deathratesA72.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA73.png";
s.link = "intpls_deathratesA73.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA74.png";
s.link = "intpls_deathratesA74.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA75.png";
s.link = "intpls_deathratesA75.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA76.png";
s.link = "intpls_deathratesA76.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA77.png";
s.link = "intpls_deathratesA77.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA78.png";
s.link = "intpls_deathratesA78.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA79.png";
s.link = "intpls_deathratesA79.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA80.png";
s.link = "intpls_deathratesA80.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA81.png";
s.link = "intpls_deathratesA81.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA82.png";
s.link = "intpls_deathratesA82.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA83.png";
s.link = "intpls_deathratesA83.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA84.png";
s.link = "intpls_deathratesA84.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA85.png";
s.link = "intpls_deathratesA85.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA86.png";
s.link = "intpls_deathratesA86.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA87.png";
s.link = "intpls_deathratesA87.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA88.png";
s.link = "intpls_deathratesA88.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA89.png";
s.link = "intpls_deathratesA89.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA90.png";
s.link = "intpls_deathratesA90.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA91.png";
s.link = "intpls_deathratesA91.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA92.png";
s.link = "intpls_deathratesA92.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA93.png";
s.link = "intpls_deathratesA93.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA94.png";
s.link = "intpls_deathratesA94.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA95.png";
s.link = "intpls_deathratesA95.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA96.png";
s.link = "intpls_deathratesA96.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA97.png";
s.link = "intpls_deathratesA97.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA98.png";
s.link = "intpls_deathratesA98.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA99.png";
s.link = "intpls_deathratesA99.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA100.png";
s.link = "intpls_deathratesA100.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA101.png";
s.link = "intpls_deathratesA101.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA102.png";
s.link = "intpls_deathratesA102.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA103.png";
s.link = "intpls_deathratesA103.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA104.png";
s.link = "intpls_deathratesA104.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA105.png";
s.link = "intpls_deathratesA105.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA106.png";
s.link = "intpls_deathratesA106.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA107.png";
s.link = "intpls_deathratesA107.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA108.png";
s.link = "intpls_deathratesA108.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA109.png";
s.link = "intpls_deathratesA109.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);s = new slide();
s.src  = "intpls_deathratesA110.png";
s.link = "intpls_deathratesA110.png";
s.text = "Open link in same window";
SLIDES.add_slide(s);

</script>

<!-- <style type="text/css">  -->

<!-- TD.nav { -->
<!-- text-color: #000000; -->
<!-- text-align : center; -->
<!-- font-size : 1.8em; -->
<!-- background-color : #FFFFFF; -->
<!-- color : #000000; -->
<!-- padding:0.5em; -->
<!-- } -->
<!-- TD.nav2 { -->
<!-- text-align : center; -->
<!-- font-size : 1.8em; -->
<!-- background-color : #FFFFFF; -->
<!-- border : solid; -->
<!-- border-color: #FFFFFF; -->
<!-- border-width: .1; -->
<!-- padding:0.5em; -->
<!-- } -->

<!-- </style> -->

<!-- <script> -->
<!-- ```{r print1, echo=F, results="asis"} -->
<!-- cat("function myFunction() {\ndocument.getElementById(\"demo\").innerHTML = \"Paragraph changed.\";\n}") -->
<!-- ``` -->
<!-- </script> -->

<!-- <p id="demo">A Paragraph.</p> -->

<!-- <button type="button" onclick="myFunction()">Try it</button> -->

<!-- <img src="intpls_deathratesY2017.png"> -->



<body class="center" onLoad="SLIDES.update()">

<h3>Diagnostic Charts for HMD Project - Country: NSW (NSW)</h3>
<!-- <h1>Diagnostic Charts for HMD Project - Country: SVK (SVK)</h1> -->

<h3>Internal plausibility - Death rates by age for each year</h3>
<hr />

<table>
<tr><td colspan="2">
<img name="SLIDESIMG" src="intpls_deathratesA0.png" alt="Slideshow image" />
</td></tr>
<tr><td class="nav">
Slide Controls:<br />
<table>
<tr>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.next();SLIDES.play();return false;">START</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.pause();return false;">STOP</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.hotlink();return false;">VIEW</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.previous();return false;">PREVIOUS</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.next();return false;">NEXT</A>
</td>
</tr>
</table></td>

<td class="nav">Delay (Seconds): <br /><table>
<tr>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=500;">0.25</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=500;">0.5</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=1000;">1</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=1500;">1.5</A>
</td>
<td class="nav2">
<a href="javascript:void(0)"
onClick="SLIDES.timeout=2000;">2</A>
</td>
</tr>
</table></td></tr>
<tr><td colspan="2" class="nav">
Go to age:
<a href="javascript:void(0)"
onClick="SLIDES.goto_slide(0);return false;">0 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(5);return false;">5 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(10);return false;">10 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(15);return false;">15 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(20);return false;">20 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(25);return false;">25 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(30);return false;">30 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(35);return false;">35 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(40);return false;">40 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(45);return false;">45 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(50);return false;">50 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(55);return false;">55 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(60);return false;">60 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(65);return false;">65 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(70);return false;">70 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(75);return false;">75 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(80);return false;">80 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(85);return false;">85 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(90);return false;">90 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(95);return false;">95 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(100);return false;">100 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(105);return false;">105 </A><a href="javascript:void(0)"
onClick="SLIDES.goto_slide(110);return false;">110 </A>
</td></tr>
</table>
<script type="text/javascript">
<!--
if (document.images) {
  SLIDES.image = document.images.SLIDESIMG;
  SLIDES.update();
  SLIDES.play();
}
//-->
</script>
<hr />
<!-- <table> -->
<!--   <tr> -->
<!--     <td class="footerl" valign="top" width="360"><address><a href="mailto:hmd@demog.berkeley.edu">Beate Danielsen: hmd@demog.berkeley.edu</a> </address></td> -->
<!--     <td class="footerr" valign="top" width="360"><em>Last Updated:<br />October 15, 2018 -->
<!--         </em><br /><a href="http://validator.w3.org/check/referer"> -->
<!--         <img height="31" alt=" [Valid XHTML 1.0!] " src="https://www.mortality.org/Public/valid-xhtml10.png"  width="88" /></a> </td> -->
<!--   </tr> -->
<!-- </table> -->
</body>

<!--chapter:end:10-intpls_deathratesbyage.Rmd-->

# Mortality deviation compared with adjacent ages, years {#mortdevageyear}


Chart of mortality deviations compared with adjacent ages. Note that the number of neighboring ages and/or years as well as the p-values for $X$ and the size of $R$ can be modified in the call to the script.

Expect to see large negative deviations at age 1 versus age 0. Patterns of large deviations, e.g., at ages ending in "0" or "5", may indicate problematic places in the mortality surface.

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/intplsmortalitydeviationsF-1.png" alt="Mortality deviation compared with adjacent ages, years" width="95%" />
<p class="caption">(\#fig:intplsmortalitydeviationsF)Mortality deviation compared with adjacent ages, years</p>
</div>

## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/intplsmortalitydeviationsM-1.png" alt="Mortality deviation compared with adjacent ages, years" width="95%" />
<p class="caption">(\#fig:intplsmortalitydeviationsM)Mortality deviation compared with adjacent ages, years</p>
</div>

<!--chapter:end:11-intpls_mortalitydeviations.Rmd-->

# Internal Plausibility: Lexis Map of Net Migration {#netmig}
Migration patterns should make sense. Should not show net migration above age 80 (unless there are territorial changes).

## Females
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntplsNetmigrationF-1.png" alt="Lexis Map of Net Migration" width="95%" />
<p class="caption">(\#fig:plotIntplsNetmigrationF)Lexis Map of Net Migration</p>
</div>

## Males
<div class="figure" style="text-align: center">
<img src="_main_files/figure-html/plotIntplsNetmigrationM-1.png" alt="Lexis Map of Net Migration" width="95%" />
<p class="caption">(\#fig:plotIntplsNetmigrationM)Lexis Map of Net Migration</p>
</div>

<!--chapter:end:12-plotIntplsNetmigration.Rmd-->

# External Plausibility: Implied migration {#impliedmig}


Chart of total net migration by calendar year and sex.

Might be used to check that pattern of implied migration is consistent with any available migration data. Years of a territorial adjustment are identified by orange vertical lines.




































