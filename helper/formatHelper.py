def formatFull(data):
    return {
        "name": data[2],
        "city": data[3],
        "state": data[4],
        "url": data[5],
        "latitude": data[6],
        "longitude": data[7],
        "enrollment": data[25],
        "admission-rate": "{}%".format(str(round(data[8]*100, 3))),
        "SAT_R_25": data[9],
        "SAT_R_75": data[10],
        "SAT_M_25": data[11],
        "SAT_M_75": data[12],
        "SAT_R_MID": data[13],
        "SAT_M_MID": data[14],
        "SAT_AVG": data[15],
        "ACT_25": data[16],
        "ACT_75": data[17],
        "ACT_EN_25": data[18],
        "ACT_EN_75": data[19],
        "ACT_M_25": data[20],
        "ACT_M_75": data[21],
        "ACT_AVG": data[22],
        "ACT_EN_AVG": data[23],
        "ACT_M_AVG": data[24],
        "race-white": data[26],
        "race-black": data[27],
        "race-hispanic": data[28],
        "race-asian": data[29],
        "attendance fee": data[35],
        "tuition_IN": data[36],
        "tuition_OUT": data[37],
        "retention-rate": data[38],
        "graduates": data[40],
        "transfer-rate": "{}%".format(str(round(data[41],6)))
    }

def formatBasic(data):
    return {
        "name": data[2],
        "state": data[4],
        "enrollment": data[25],
        "admission-rate": "{}%".format(str(round(data[8]*100, 3)))
    }

def formatScore(data):
    return {
        "SAT_R_25": data[9],
        "SAT_R_75": data[10],
        "SAT_M_25": data[11],
        "SAT_M_75": data[12],
        "SAT_R_MID": data[13],
        "SAT_M_MID": data[14],
        "SAT_AVG": data[15],
        "ACT_25": data[16],
        "ACT_75": data[17],
        "ACT_EN_25": data[18],
        "ACT_EN_75": data[19],
        "ACT_M_25": data[20],
        "ACT_M_75": data[21],
        "ACT_AVG": data[22],
        "ACT_EN_AVG": data[23],
        "ACT_M_AVG": data[24],
    }