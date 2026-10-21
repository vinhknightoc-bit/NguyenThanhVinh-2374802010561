// Dữ liệu tài khoản (có sẵn tài khoản mẫu)
let danhSachTaiKhoan = [
    { taiKhoan: "khach1", matKhau: "123456" }
];

// Danh sách sản phẩm mẫu
let danhSachSanPham = [
    { id: 1, ten: "Áo thun nam", gia: 150000 },
    { id: 2, ten: "Quần Jean", gia: 300000 },
    { id: 3, ten: "Giày Sneaker", gia: 500000 }
];

// Giỏ hàng của người dùng hiện tại
let gioHang = [];

// DOM elements
let oTaiKhoan = document.getElementById("oTaiKhoan");
let oMatKhau = document.getElementById("oMatKhau");
let thongBaoLoi = document.getElementById("thongBaoLoi");
let manHinhDangNhap = document.getElementById("manHinhDangNhap");
let manHinhCuaHang = document.getElementById("manHinhCuaHang");
let tenDangNhap = document.getElementById("tenDangNhap");
let bangSanPham = document.getElementById("bangSanPham");
let bangGioHang = document.getElementById("bangGioHang");
let tongTien = document.getElementById("tongTien");

// 1. Chức năng Đăng nhập
function dangNhap() {
    let tk = oTaiKhoan.value.trim();
    let mk = oMatKhau.value.trim();

    if (tk === "" || mk === "") {
        thongBaoLoi.innerText = "Vui lòng nhập đầy đủ tài khoản và mật khẩu!";
        return;
    }

    let timthay = danhSachTaiKhoan.find(item => item.taiKhoan === tk && item.matKhau === mk);

    if (timthay) {
        thongBaoLoi.innerText = "";
        manHinhDangNhap.style.display = "none";
        manHinhCuaHang.style.display = "block";
        tenDangNhap.innerText = tk;
        hienThiSanPham();
        hienThiGioHang();
    } else {
        thongBaoLoi.innerText = "Sai tài khoản hoặc mật khẩu!";
    }
}

// 2. Chức năng Đăng ký tài khoản mới
function dangKy() {
    let tk = oTaiKhoan.value.trim();
    let mk = oMatKhau.value.trim();

    if (tk === "" || mk === "") {
        thongBaoLoi.innerText = "Vui lòng nhập tài khoản và mật khẩu để đăng ký!";
        return;
    }

    let daTonTai = danhSachTaiKhoan.some(item => item.taiKhoan === tk);
    if (daTonTai) {
        thongBaoLoi.innerText = "Tài khoản này đã tồn tại!";
        return;
    }

    danhSachTaiKhoan.push({ taiKhoan: tk, matKhau: mk });
    thongBaoLoi.style.color = "#22c55e";
    thongBaoLoi.innerText = "Đăng ký thành công! Bạn có thể bấm Đăng nhập.";
    setTimeout(() => { thongBaoLoi.style.color = "#ef4444"; }, 3000);
}

// 3. Chức năng Đăng xuất
function dangXuat() {
    oTaiKhoan.value = "";
    oMatKhau.value = "";
    thongBaoLoi.innerText = "";
    gioHang = [];
    manHinhCuaHang.style.display = "none";
    manHinhDangNhap.style.display = "block";
}

// 4. Hiển thị danh sách sản phẩm ra bảng
function hienThiSanPham() {
    let html = "";
    for (let i = 0; i < danhSachSanPham.length; i++) {
        let sp = danhSachSanPham[i];
        html += `
            <tr>
                <td>${sp.ten}</td>
                <td>${sp.gia.toLocaleString()}đ</td>
                <td><button class="btn-them-gh" onclick="themVaoGioHang(${sp.id})">Thêm</button></td>
            </tr>
        `;
    }
    bangSanPham.innerHTML = html;
}

// 5. Thêm sản phẩm vào giỏ hàng
function themVaoGioHang(id) {
    let sp = danhSachSanPham.find(item => item.id === id);
    let itemTrongGio = gioHang.find(item => item.id === id);

    if (itemTrongGio) {
        itemTrongGio.soLuong += 1;
    } else {
        gioHang.push({ ...sp, soLuong: 1 });
    }
    hienThiGioHang();
}

// 6. Hiển thị giỏ hàng
function hienThiGioHang() {
    if (gioHang.length === 0) {
        bangGioHang.innerHTML = "<p style='color:#999; font-size:14px;'>Giỏ hàng trống</p>";
        tongTien.innerText = "0đ";
        return;
    }

    let html = "<table style='width:100%'><tr><th>Tên</th><th>SL</th><th>Tiền</th><th></th></tr>";
    let tong = 0;

    for (let i = 0; i < gioHang.length; i++) {
        let item = gioHang[i];
        let thanhTien = item.gia * item.soLuong;
        tong += thanhTien;
        html += `
            <tr>
                <td>${item.ten}</td>
                <td>${item.soLuong}</td>
                <td>${thanhTien.toLocaleString()}đ</td>
                <td><button onclick="xoaKhoiGio(${item.id})" style="background:#ef4444;color:white;border:none;padding:2px 6px;border-radius:3px;cursor:pointer;">X</button></td>
            </tr>
        `;
    }
    html += "</table>";
    bangGioHang.innerHTML = html;
    tongTien.innerText = tong.toLocaleString() + "đ";
}

// 7. Xóa sản phẩm trong giỏ
function xoaKhoiGio(id) {
    gioHang = gioHang.filter(item => item.id !== id);
    hienThiGioHang();
}

// 8. Thanh toán giỏ hàng
function thanhToan() {
    if (gioHang.length === 0) {
        alert("Giỏ hàng của bạn đang trống!");
        return;
    }
    alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
    gioHang = [];
    hienThiGioHang();
}