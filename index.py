from bs4 import BeautifulSoup
import requests
headers = {'Content-Type': 'application/json; charset=utf-8'}



URL = 'https://www.melon.com/chart/index.htm'
html = requests.get(URL, headers=headers).text
soup = BeautifulSoup(html, 'html.parser')
print(html)