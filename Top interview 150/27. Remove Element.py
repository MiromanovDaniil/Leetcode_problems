class Solution(object):
    def removeElement(self, nums, val):
        for i in range(nums.count(val)):
            nums.remove(val)
        return len(nums)

if __name__ == '__main__':
    sol = Solution()
    print(sol.removeElement([0,1,2,2,3,0,4,2],2))
