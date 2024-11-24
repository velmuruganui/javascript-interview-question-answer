Normal Button (Every Click Executes):
Events:    |||||||||||||||||||| (User Clicks)
Execution: |||||||||||||||||||| (All Execute)
Time(ms):  0  100 200 300 400 500...

_____________________________________


Throttled Button (1000ms limit):
Events:    |||||||||||||||||||| (User Clicks)
Execution: |     |     |     | (Throttled)
Time(ms):  0    1000  2000  3000...


_____________________________________


Debounced Button (1000ms delay):
Events:    |||||||||||||||||||| (User Clicks)
Execution:                   |  (Waits for pause)
Time(ms):  0...................1000


 