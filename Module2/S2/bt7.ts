function towsum(nums: number[], target: number): number[] {
    const index: {[key: number]: number} = {};  // luu trữ chỉ số và sô 
    for (let i: number = 0; i < nums.length; i++) { 
      const check: number = target - nums[i]; 
      if (index.hasOwnProperty(check)) { // Kiểm tra xem số bổ sung có trong Map không
        return [index[check], i]; // Nếu có, trả về chỉ số của số bổ sung và chỉ số hiện tại
      }
  
      index[nums[i]]=i; // Lưu số hiện tại và chỉ số của nó vào Map
    }
  
    return []; // Nếu không tìm thấy, trả về mảng rỗng
  }
