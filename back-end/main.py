import getloc
import json
import os
import io

def main():

    # Destination IP address
    ipaddress = "8.8.8.8"

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
    result = getloc.getLocations(ip_list)


    final = {"Data":[]}
    for i in result:
        final["Data"].append(json.dumps(i.__dict__))

    with io.open('output.txt', 'w') as f:
        f.write(str(final))
    
if __name__ == "__main__":
    main()