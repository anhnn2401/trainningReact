
export const messenges = [
  {
    name: 'Nguyễn Văn A',
    id: 'nguyenvana',
    content: 'Hello',
    status: true,
    image: require('../../assets/images/img-1.jpg'),
    description: 'day la noi dung tin nhan 1',
    messager: 'Chào A',
    messager2: 'em làm 1 trang detail có url dạng: /message/1, trong trang detail em lấy id được truyền vào từ this.props.match.params.id sau đó lấy data messages của em find item có id === this.props.match.params.id => nếu có thì hiển thị chi tiết ra',
    messager1: 'a ơi làm sao để khi click vào từng phần thì nó cho kết quả ra là nội dung tin nhắn của phần đó vậy a'
  },{
    name: 'Lê thị B',
    id: 'nguyenvanb',
    content: 'Hello',
    status: true,
    image: require('../../assets/images/img-2.jpg'),
    description: 'day la noi dung tin nhan b2',
    messager: 'Chào B',
    messager2: 'day la noi dung tin nhan 2. em làm 1 trang detail có url dạng: /message/1, trong trang detail em lấy id được truyền vào từ this.props.match.params.id sau đó lấy data messages của em find item có id === this.props.match.params.id => nếu có thì hiển thị chi tiết ra',
    messager1: 'a ơi làm sao để khi click vào từng phần thì nó cho kết quả ra là nội dung tin nhắn của phần đó vậy a'
  },{
    name: 'Nguyễn văn C',
    id: 'nguyenvanc',
    content: 'Hello',
    status: true,
    image: require('../../assets/images/img-3.jpg'),
    description: 'day la noi dung tin nhan 3',
    messager: 'Chào C',
    messager2: 'day la noi dung tin nhan 3 . em làm 1 trang detail có url dạng: /message/1, trong trang detail em lấy id được truyền vào từ this.props.match.params.id sau đó lấy data messages của em find item có id === this.props.match.params.id => nếu có thì hiển thị chi tiết ra',
    messager1: 'a ơi làm sao để khi click vào từng phần thì nó cho kết quả ra là nội dung tin nhắn của phần đó vậy a'
  },{
    name: 'Lê văn D',
    id: 'nguyenvand',
    content: 'Hello',
    status: true,
    image: require('../../assets/images/img-4.jpg'),
    description: 'day la noi dung tin nhan 4',
    messager: 'Chào D',
    messager2: 'day la noi dung tin nhan 3. em làm 1 trang detail có url dạng: /message/1, trong trang detail em lấy id được truyền vào từ this.props.match.params.id sau đó lấy data messages của em find item có id === this.props.match.params.id => nếu có thì hiển thị chi tiết ra',
    messager1: 'a ơi làm sao để khi click vào từng phần thì nó cho kết quả ra là nội dung tin nhắn của phần đó vậy a'
  },
];
// localStorage.setItem('messagers', JSON.stringify(messagers));
// console.log('alog',JSON.parse(localStorage.getItem('messagers')))