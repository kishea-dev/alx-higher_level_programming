#!/usr/bin/python3
"""Returns the peak of an a list."""


def find_peak(list_of_integers):
    mid = len(list_of_integers)//2
    size = len(list_of_integers)

    if list_of_integers == []:
        return None

    if (mid == size - 1 or list_of_integers[mid] >= list_of_integers[mid + 1])\
     and (mid == 0 or list_of_integers[mid] >= list_of_integers[mid - 1]):
        return list_of_integers[mid]
    if mid != size - 1 and list_of_integers[mid + 1] > list_of_integers[mid]:
        return find_peak(list_of_integers[mid + 1:])
    return find_peak(list_of_integers[:mid])
