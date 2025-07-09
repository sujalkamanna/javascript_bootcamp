nums = [0, 1, 3]
n = len(nums)
# sums = n*(n+1)//2
actual_sum = sum(nums)
final_sum = (n*(n+1)//2)-actual_sum
print(final_sum)
