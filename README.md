# UniMatch
A wonderful app for searching and comparing Top 100 US universities, and helping you match your best fit college
(see the college [list](https://www.usnews.com/best-colleges/rankings/national-universities) here)

### Demo
-------
<br />

### Screenshots
--------


### API
-------------
#### GET 
- /schools/byname  
    - /basic/**string:name**
    - /full/**string:name**
    - /score/**string:name**
- /schools/byid  
[Search for OPEID of US colleges](https://opecode.com/)
    - /basic/**int:opeid**
    - /full/**int:opeid**
    - /score/**int:opeid**
#### POST
- /signup
- /login


### JSON Format
-----
#### Full college information
``` JSON
  "ACT_25": 28,
  "ACT_75": 33,
  "ACT_AVG": 31,
  "ACT_EN_25": 27,
  "ACT_EN_75": 34,
  "ACT_EN_AVG": 31,
  "ACT_M_25": 28,
  "ACT_M_75": 33,
  "ACT_M_AVG": 31,
  "SAT_AVG": 1383,
  "SAT_M_25": 660,
  "SAT_M_75": 740,
  "SAT_M_MID": 700,
  "SAT_R_25": 630,
  "SAT_R_75": 710,
  "SAT_R_MID": 670,
  "admission-rate": 0.492,
  "attendance-fee": 33038,
  "city": "Golden",
  "enrollment": 4906,
  "graduates": 1373,
  "latitude": 39.75,
  "longitude": -105.22,
  "name": "Colorado School of Mines",
  "race-asian": 0.045,
  "race-black": 0.01,
  "race-hispanic": 0.092,
  "race-white": 0.722,
  "retention-rate": 0.921,
  "state": "CO",
  "transfer-rate": 0.061,
  "tuition_IN": 18964,
  "tuition_OUT": 38584,
  "url": "www.mines.edu"
```

#### Basic college information
``` JSON
"admission-rate": 0.067,
"enrollment": 4550,
"name": "Massachusetts Institute of Technology",
"state": "MA"
```

#### Admission score information
``` JSON
  "ACT_25": 34,
  "ACT_75": 36,
  "ACT_AVG": 35,
  "ACT_EN_25": 34,
  "ACT_EN_75": 36,
  "ACT_EN_AVG": 35,
  "ACT_M_25": 34,
  "ACT_M_75": 36,
  "ACT_M_AVG": 35,
  "SAT_AVG": 1545,
  "SAT_M_25": 780,
  "SAT_M_75": 800,
  "SAT_M_MID": 790,
  "SAT_R_25": 720,
  "SAT_R_75": 770,
  "SAT_R_MID": 745
```

#### Documentation
- _"ACT_AVG"_ is the average cumulative ACT score
- _"ACT_M_AVG"_ is the average ACT math score
- _"Enrollment"_ is only the undergraduate enrollment
- _"graduates"_ is the number of graduate students
- _"attendance fee"_ is the estimated cost a student will spend in an academic year (tuition, personal expense...)

### Authors
---------------
- Junqi Xu  jackyxu8832@gmail.com
- Chengpo Yan   

### LICENSE
---------------

### Credits
---------------