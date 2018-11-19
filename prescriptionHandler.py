import json
from pprint import pprint

prescriptionList = ""


with open("data.json") as f:
	data = json.load(f)


for element in data:
	for attribute, value in element.iteritems():
		prescriptionList =  prescriptionList + attribute + ":" + value + "\n"

f = open("prescriptionsExport.txt", "w")
f.write(prescriptionList)