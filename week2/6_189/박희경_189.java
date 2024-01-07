class Solution {
    public void rotate(int[] nums, int k) {
        k %= nums.length; // k가 배열 길이보다 클 경우를 대비

        reverse(nums, 0, nums.length - 1);
        reverse(nums, 0, k - 1);
        reverse(nums, k, nums.length - 1);
    }

    void reverse(int[] nums, int start, int end) { // 메소드 이름을 'reserve'에서 'reverse'로 변경
        while(start < end) {
            int temp = nums[start];
            nums[start++] = nums[end];
            nums[end--] = temp;
        }
    }
}
