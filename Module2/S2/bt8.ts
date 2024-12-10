function Valid(s: string): boolean {
    const stack: string[] = []; // Khởi tại để lưu trữ
    const cacdau: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char in cacdau) {
            // Nếu ký tự là dấu đóng ngoặc
            const topElement = stack.pop(); // Lấy phần tử trên cùng của ngăn xếp
            if (topElement !== cacdau[char]) {
                // Kiểm tra xem phần tử đó có khớp với dấu ngoặc mở không
                return false;
            }
        } else {
            // Nếu là dấu mở ngoặc, thêm vào ngăn xếp
            stack.push(char);
        }
    }

    // Cuối cùng, nếu ngăn xếp rỗng thì chuỗi hợp lệ
    return stack.length === 0;
}
