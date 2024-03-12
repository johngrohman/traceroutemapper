import getloc

def parseTraceRoute(data: str, goalIPAddress) -> list:
    textoutput = data.split('\n')
    
    result = []

    for i in textoutput[0:len(textoutput)-3]:
        temp = i[2:].split(' ')
        result.append(temp[3][1:len(temp[3])-1])
    result.append(goalIPAddress)
    return(result)