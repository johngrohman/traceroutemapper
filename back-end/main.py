import getloc
import json
import os
import io

def main(value):

    # Destination IP address
    ipaddress = value

    ## Start tracerouting and output result to file.txt
    output = os.system(f'traceroute {ipaddress} > file.txt')
    file = io.open('file.txt')
    solution = file.read()
    ip_list = []
    logitude_and_latitudes = []

    # Iterate through the file, gathering a list of the IP's
    for line in solution.split("\n"):
        if "(" in line:
            ip_list.append(line[line.find("(")+1:line.find(")")])
        else:
            continue
    
    # Get GeoLocations of the ip_list
    print("getting locations")
    result = getloc.getLocations(ip_list)

    # JSON object
    print('here', dir(result[0]))
    print('AGAIN', result[0].__dict__)

    final = [json.loads(json.dumps(i.__dict__, indent=4)) for i in result]

    json_object = json.dumps(final, indent=4)

    with open('output.json', 'w') as f:
        f.write(json_object)
        
    return json_object

if __name__ == "__main__":
    main()