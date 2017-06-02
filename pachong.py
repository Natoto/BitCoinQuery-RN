#encoding=utf-8


import httplib; 
import time;
import functools;
import socket;  
import re;
import urllib;


def getHtml(url):
    page = urllib.urlopen(url)
    html = page.read()
    return html

# def getImg(html):
#     reg = r'data-mp4="(.+?\.mp4)"'
#     imgre = re.compile(reg)
#     imglist = re.findall(imgre,html)
#     return imglist      
def getImg(html):
    reg = r'data-mp4="(.+?\.mp4)"' 
    imgre = re.compile(reg)
    imglist = re.findall(imgre,html)
    x = 0
    for imgurl in imglist:
        urllib.urlretrieve(imgurl,'%s.mp4' % x)
        x+=1


html = getHtml("http://www.budejie.com/")
print getImg(html)

def httpgetrequest(url2,runcount=10):  

	conn = httplib.HTTPConnection("budejie.com")
	s=url2.strip()
	if len(s) == 0:
		print '空白行不执行'
		return
	start = time.time() 
	print '++++总共需要执行 %d 次 请求url:%s'%(runcount,url2)
	for x in xrange(1,runcount+1): 
		conn.request(method="GET",url=url2) 
		response = conn.getresponse()
		res= response.read()
		print '----->',x,res, 
		time.sleep(0.2)
		print ''
		conn.close()    
	finish=time.time() 
	print '===>总共执行 %d 次 \n===>请求url:%s'%(runcount,url2)
	print '===>开始时间：%s 结束时间:%s \n===>耗时：%s秒'%(start,finish,(finish-start))

reg=r'data-mp4="(.*?)"'

url="http://www.budejie.com/"
# httpgetrequest(url,1)
 


