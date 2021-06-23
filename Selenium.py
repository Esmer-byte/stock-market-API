from selenium import webdriver
import selenium
import time
from selenium.webdriver.common.keys import Keys
PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)


driver.get("http://localhost:3001/")
maximum = 0


def Search(str):
    global maximum
    search = driver.find_element_by_name("input")
    search.send_keys(str)
    search = driver.find_element_by_name("submit")
    search.send_keys(Keys.RETURN)
    time.sleep(2)
    search = driver.find_element_by_name("display")
    search.send_keys(Keys.RETURN)
    main = driver.find_element_by_id("4")
    print(main.text)
    driver.find_element_by_name("input").clear()
    if float(main.text) > maximum:
        maximum = float(main.text)


Search("TSLA")
Search("IBM")
Search("FB")
Search("AMZN")

print(maximum)
time.sleep(2)
driver.quit()
