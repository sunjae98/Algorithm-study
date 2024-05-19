"""

"""
import sys

input = sys.stdin.readline

s = input()
t = input()
answer = 0


def dfs(str, target):
    global answer
    if len(target) == len(str):
        if target == str:
            answer = 1
            return
    if target[-1] == 'A':
        dfs(str, target[:-1])
    if target[0] == 'B':
        dfs(str, target[1:][::-1])


dfs(s, t)
print(answer)
