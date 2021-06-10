from selenium import webdriver
import selenium
import time, array
from selenium.webdriver.common.keys import Keys
PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)


driver.get("http://localhost:3000/")

max = 0
search = driver.find_element_by_name("input")
search.send_keys("TSLA")
search = driver.find_element_by_name("submit")
search.send_keys(Keys.RETURN)
time.sleep(2)
search = driver.find_element_by_name("display")
search.send_keys(Keys.RETURN)
main = driver.find_element_by_id("4")
print(main.text)
driver.find_element_by_name("input").clear()

if float(main.text) > max:
    max = float(main.text)

search = driver.find_element_by_name("input")
search.send_keys("IBM")
search = driver.find_element_by_name("submit")
search.send_keys(Keys.RETURN)
time.sleep(2)
search = driver.find_element_by_name("display")
search.send_keys(Keys.RETURN)
main = driver.find_element_by_id("4")
print(main.text)
driver.find_element_by_name("input").clear()

if float(main.text) > max:
    max = float(main.text)

search = driver.find_element_by_name("input")
search.send_keys("AMZN")
search = driver.find_element_by_name("submit")
search.send_keys(Keys.RETURN)
time.sleep(2)
search = driver.find_element_by_name("display")
search.send_keys(Keys.RETURN)
main = driver.find_element_by_id("4")
print(main.text)
driver.find_element_by_name("input").clear()

if float(main.text) > max:
    max = float(main.text)

search = driver.find_element_by_name("input")
search.send_keys("FB")
search = driver.find_element_by_name("submit")
search.send_keys(Keys.RETURN)
time.sleep(2)
search = driver.find_element_by_name("display")
search.send_keys(Keys.RETURN)
main = driver.find_element_by_id("4")
print(main.text)
driver.find_element_by_name("input").clear()

if float(main.text) > max:
    max = float(main.text)

print(max)
time.sleep(2)
driver.quit()
