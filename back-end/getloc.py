import ipaddress
import json
import requests
import time

class GeoLocation:
    def __init__(self, ip, lon, lat, cit):
        self.ipaddress = ip
        self.longitude = lon
        self.latitude = lat
        self.city = cit

def getMyLocation():
    # Returns my IP, longitude, latitude, and city
    url = 'https://ipapi.co/json/'
    response = requests.get(url)
    data = response.json()
    
    # Implement exception handling incase request doesn't work
    try:
        myIP = data['ip']
        longitude = data['longitude']
        latitude = data['latitude']
        city = ['city']
    except KeyError as e:
        print('Key Error: {e} not found')
        exit()

def getTargetLocation(IP):
    # Returns longitude, latitude, and city
    url = f'https://ipapi.co/{IP}/json/'
    response = requests.get(url)
    data = response.json()

    try:
        longitude = data['longitude']
        latitude = data['latitude']
        city = data['city']
    except KeyError as e:
        print('Key Error: {e} not found')
        exit()

def getLocations(ipList):
    # input: (list) --> ipAddress
    # output: (List) (GeoLocation, GeoLocation, GeoLocation, ...)

    solutions = []

    for ip in ipList:
        url = f'https://ipapi.co/{ip}/json/'
        response = requests.get(url)
        data = response.json()
        try:
            newGeoLoc = GeoLocation(data['ip'], data['longitude'], data['latitude'], data['city'])
            solutions.append(newGeoLoc)
        except KeyError as e:
            print(f'Key Error: {e} not found')
            print("response: ", response.json())
        time.sleep(1)
    return solutions