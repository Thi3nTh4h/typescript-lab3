var enter = '';
var sinhVien = /** @class */ (function () {
    function sinhVien(msv, ten, tuoi, diachi, gioitinh, love) {
        this.ten = ten;
        this.tuoi = tuoi;
        this.diachi = diachi;
        this.gioitinh = gioitinh;
        this.love = love;
    }
    sinhVien.prototype.HTML = function () {
        enter +=
            "<tr>\n            <td> ".concat(this.msv, "</td>\n            <td> ").concat(this.ten, "</td>\n            <td> ").concat(this.tuoi, "</td>\n            <td> ").concat(this.diachi, "</td>\n            <td> ").concat(this.gioitinh, "</td>\n            <td> ").concat(this.love, "</td>\n        </tr>");
    };
    return sinhVien;
}());
var sinhVien1 = new sinhVien('B9167', 'ThienThanh', 19, 'Hai Phong', 'nam', true);
var sinhVien2 = new sinhVien('B9167', 'ThienThanh', 19, 'Hai Phong', 'nam', true);
var sinhVien3 = new sinhVien('B9167', 'ThienThanh', 19, 'Hai Phong', 'nam', true);
var sinhVien4 = new sinhVien('B9167', 'ThienThanh', 19, 'Hai Phong', 'nam', true);
sinhVien1.HTML();
sinhVien2.HTML();
sinhVien3.HTML();
sinhVien4.HTML();
var table = document.getElementById('table').innerHTML = enter;
