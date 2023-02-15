import React from 'react'
import styles from "./styles.module.css";
function Home() {
  return (
    <div className={styles.home}>
   
   <div className="content">
        {/* <div className="text">
            <h1>Solution Anywhere</h1>
        </div> */}

        <div className="blog">
            <div className="img1">
            <h1>Solution Anywhere</h1>
              {/* <img src="https://aptech-danang.edu.vn/Content/ace/images/banner-sm.jpg" alt="" > */}
              <img src="https://static.wixstatic.com/media/79f840_aa9d9471eef44222a87e85ad4940dd5e~mv2.png/v1/fill/w_1349,h_436,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/79f840_aa9d9471eef44222a87e85ad4940dd5e~mv2.png" alt="" />
              </div>

        </div>
        <div className="text12">
        Solution Anywhere là trụ sở của tổ chức phát triển phần mềm mã nguồn mở tại Chicago, Hoa Kỳ. 
Công ty muốn làm cho sự hiện diện của mình trở nên phổ biến trên toàn thế giới bằng cách tạo ra một trang Web sẽ làm nổi bật các hoạt động được thực hiện bởi tổ chức. 
Tổ chức cũng cung cấp tất cả các phần mềm có sẵn dưới dạng phần mềm miễn phí. 
        </div>
    </div> 
    </div>
  )
}

export default Home