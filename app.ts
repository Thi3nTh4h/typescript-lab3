let enter = '';
class sinhVien {
    msv: string;
    ten: string;
    tuoi: number;
    diachi: string;
    gioitinh: string;
    love: boolean;
    
    constructor(  msv: string,ten: string,  tuoi: number,diachi: string,gioitinh: string, love:boolean){
        this.ten = ten;
        this.tuoi = tuoi;
        this.diachi = diachi;
        this.gioitinh = gioitinh;
        this.love = love;
    }
   
 HTML():void{
  
        enter += 
        `<tr>
            <td> ${this.msv}</td>
            <td> ${this.ten}</td>
            <td> ${this.tuoi}</td>
            <td> ${this.diachi}</td>
            <td> ${this.gioitinh}</td>
            <td> ${this.love}</td>
        </tr>`
}
}

var sinhVien1 = new sinhVien('B9167','ThienThanh',19 ,'Hai Phong', 'nam', true);
var sinhVien2 = new sinhVien('B9167','ThienThanh',19 ,'Hai Phong', 'nam', true);
var sinhVien3 = new sinhVien('B9167','ThienThanh',19 ,'Hai Phong', 'nam', true);
var sinhVien4 = new sinhVien('B9167','ThienThanh',19 ,'Hai Phong', 'nam', true);
sinhVien1.HTML()
sinhVien2.HTML()
sinhVien3.HTML()
sinhVien4.HTML()
var table = document.getElementById('table').innerHTML = enter
