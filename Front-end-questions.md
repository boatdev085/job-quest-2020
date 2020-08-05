# Front-end Questions

### 1. Explain the what's similar & difference between cookie / localStorage / sessionStorage.

answer: cookie / localStorage / sessionStorage ทั้งหมดนี่เก็บค่าเป็น key value
localStorage และ sessionStorage ทำงานเหมือนกัน ต่างกันแค่ localStorage นั้นจะเก็บข้อมูลบนเว็บ browser
และจะไม่ถูกลบ (ถ้า user ไม่เข้ามาลบหรือเคลียร์ cache) ส่วน sessionStorage  
 นั้นจะถูกเคลียร์ค่าทิ้งหลังจากที่ปิด browser ทั้งสองตัวนี้ใช้ในการเก็บข้อมูลที่ client สามารถเรียกใช้และแก้ไขได้ง่าย
ยกตัวอย่าง redux ก็เก็บค่า state บน localStorage

cookie จะต่างจาก localStorage และ sessionStorage ตรงที่สามารถตั้งเวลา expired ให้ลบตัวมันเองได้ และสามารถถูกเรียกใช้ได้จากฝั่ง server
(ถ้า web application เราทำเป็น server-side rendering)

### 2. Today React have hooks. Do we still need a class component? If your answer is yes then which case that we still need to use class component.

answer: ส่วนตัวนั้นชอบเขียนแบบ react hooks มากกว่าเพราะทำให้โค้ดดูสั้นอ่านง่าย แยก logic ได้ง่าย ผมมองว่า react hooks นั้นทำได้เกือบเทียบเท่า class components แล้ว อาจจะมีบาง life cycle ที่ react hooks ยังไม่สามารถทำได้ เช่น componentDidCatch

### 3. Breifly describe how Virtual DOM works.

answer: virtual DOM element มีการเปลี่ยนแปลง virtual dom บันทึกค่าไว้ใน memory ช่วงคราวเพื่อเช็คดูว่ามี ค่าไหนใน dom เปลี่ยนบ้าง จากนั้นจึงทำการ update
เฉพาะค่าที่เปลี่ยนแปลงเข้าไปใน real dom เช่น ถ้าบนหน้าเว็บมี div ทั้งหมด 500 อัน แล้วมีการแก้ไข อันที่ 400 virtual dom จะจำค่าเก่าไว้ใน memory และคำนวณหา dom ที่มีการเปลี่ยนแปลง จากนั้น render ใหม่แค่อันที่ 400

### 4. Consider this React's components tree

```
Apps > ComponentA > ComponentB > ComponentC > ComponentD > ComponentE
```

### If we have a state at Apps component, and ComponentE component want to access that state value. How do you implements this?

answer: จะใช้ state management ในการจัดการ state เพื่อส่งค่าข้าม components ไป ยกตัวอย่างเช่น react ที่ไม่ใส่การส่ง props ต่อกันไปเรื่อยๆ เพราะจะทำให้โค้ดเกิดความซับซ้อนและทำให้กลับมาแก้ไขได้ยาก

### 5. What different between using relative / absolute / fixed to position the element.

answer: relative นั้นเราสามารถใช้ left,top,right,bottom ได้โดยที่จะจองช่องไว้และจะ block จะขยับตามที่ปรับแต่ และ element อื่นๆ ที่อยู่ใต้ element ที่มี relative จะไม่สามารถขึ้นมาทับ relative ที่อยู่ก่อนหน้าได้ เหมาะสำหรับใช้วาง element ต่อๆ กัน

absolute นั้นจะลอยอยู่บน relative ชั้นนอกสุดที่ครอบ absolute อยู่ สามารถปรับ left,top,right,bottom ได้แต่จะอยู่ภายใต้ relative ที่ครอบอยู่อีกเช่นกัน เหมาะสำหรับใส่ element ที่อยู่อยู่ภายในการ์ด หรือ popup ถ้า scroll จะลอยตาม relative ไป

fixed นั้นยึดตามขนาดหน้าจอ ปรับ left,top,right,bottom ได้ตามต้องการจะยึดตามขนาดหน้าจอ ถ้า scroll จะไม่ลอยตามถ้าไม่ได้ set overflow scroll ในตัว fixed
เหมาะสำหรับทำ popup , loading full page

### 6. Explain the different between using callback / Promise / async await. When to use and when not to.

answer: callback คือการส่ง function ไปใน function เนื่องจาก javascript นั้นเป็น asynchronous ทำให้การทำงานของ function 2 function นั้นไม่รอกัน จึงต้องใช้วิธีการ callback คือการส่ง function ที่จะทำงานต่อไป เข้าไปใน function ที่กำลังทำงานอยู่เพื่อให้สามารถเรียกใช้ได้เมื่อทำงานใน function ตัวเองเสร็จ
ถ้าส่ง function ต่อกันมากๆ จะทำให้เกิดอาการ callback hell ทำให้จัดการยากขึ้นเมื่อมีการเรียกใช้ function ต่อกันหลายๆ function
  
 Promise นั้นคือการสร้าง function ที่จะคืนค่าให้ตัวแปรต่อเมื่อมีการใช้ function resolve หรือ reject ใน function Promise
Promise จะเจ๋งกว่า callback ตรงที่สามารถเขียนคำสั่ง asynchronous เข้าไปเท่าไหร่ก็ได้ จนกว่าจะเรียกใช้ function resolve หรือ reject เพื่อจบการทำงานของ Promise
และยังมี Promise.all ที่รับค่า function array เหมาะแก่การดึงข้อมูลจากหลังบ้านๆ หลายๆ api พร้อมกัน แต่อยากรอให้เสร็จทั้งหมดก่อนเพื่อให้ได้ค่ามาแสดงผล พร้อมๆ กัน และยังลดเวลาลงด้วย เพราะไม่ต้องรอให้เสร็จทีละอันแต่สามารถรอให้เสร็จพร้อมๆ กันได้
  
 async await นั้นมาใน es7 ทำให้เขียนโค้ดได้เป็นระแบบมากขึ้น แต่จะใช้งานได้แต่กับ function ที่เป็น promise(เช่น fetch api) จะสามารถ ประกาศ async ที่หน้า function และ await ที่ function ที่มีการดึงข้อมูล เพื่อรอให้ function ทำงานเสร็จได้เลย ไม่ต้องเรียกใช้ function reject เหมือน Promise
