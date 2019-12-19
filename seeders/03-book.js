'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { title : "Php, Mysql, Javascript & Html5 All-In-One For Dummies",
        availability : "Còn sách",
        author : "Steve Suehring, Janet Valade",
        content : "Get the basics on four key web programming tools in one great book! PHP, JavaScript, and HTML5 are essential programming languages for creating dynamic websites that work with the MySQL database. PHP and MySQL provide a robust, easy-to-learn, open-source solution for creating superb e-commerce sites and content management. JavaScript and HTML5 add support for the most current multimedia effects. This one-stop guide gives you what you need to know about all four! Seven self-contained minibooks cover web technologies, HTML5 and CSS3, PHP programming, MySQL databases, JavaScript, PHP with templates, and web applications.",
        rating : 4,
        quantity : 2,
        typeId : 1
      },
      { title : "Beginning Programming With Java For Dummies - 4Th Edition",
        availability : "Còn sách",
        author : "Barry A. Burd",
        content : "Beginning Programming with Java For Dummies, 4th Edition is a comprehensive guide to learning one of the most popular programming languages worldwide. This book covers basic development concepts and techniques through a Java lens. You'll learn what goes into a program, how to put the pieces together, how to deal with challenges, and how to make it work. The new Fourth Edition has been updated to align with Java 8, and includes new options for the latest tools and techniques. Java is the predominant language used to program Android and cloud apps, and its popularity is surging as app demand rises. Whether you're just tooling around, or embarking on a career, Beginning Programming with Java For Dummies, 4th Edition is a great place to start. Step-by-step instruction, easy-to-read language, and quick navigation make this book the perfect resource for new programmers. You'll begin with the basics before moving into code, with simple, yet detailed explanations every step of the way.",
        rating : 3,
        quantity : 3,
        typeId : 1
      },
      { title : "Machine Learning Cơ Bản",
        availability : "Hết sách",
        author : "Vũ Hữu Tiệp",
        content : "Những năm gần đây, AI - Artificial Intelligence (Trí Tuệ Nhân Tạo), và cụ thể hơn là Machine Learning (Học Máy hoặc Máy Học) nổi lên như một bằng chứng của cuộc cách mạng công nghiệp lần thứ tư (1 - động cơ hơi nước, 2 - năng lượng điện, 3 - công nghệ thông tin). Trí Tuệ Nhân Tạo đang len lỏi vào mọi lĩnh vực trong đời sống mà có thể chúng ta không nhận ra. Xe tự hành của Google và Tesla, hệ thống tự tag khuôn mặt trong ảnh của Facebook, trợ lý ảo Siri của Apple, hệ thống gợi ý sản phẩm của Amazon, hệ thống gợi ý phim của Netflix, máy chơi cờ vây AlphaGo của Google DeepMind, …, chỉ là một vài trong vô vàn những ứng dụng của AI/Machine Learning.\n Machine Learning là một tập con của AI. Theo định nghĩa của Wikipedia, Machine learning is the subfield of computer science that “gives computers the ability to learn without being explicitly programmed”. Nói đơn giản, Machine Learning là một lĩnh vực nhỏ của Khoa Học Máy Tính, nó có khả năng tự học hỏi dựa trên dữ liệu đưa vào mà không cần phải được lập trình cụ thể. Bạn Nguyễn Xuân Khánh tại đại học Maryland đang viết một cuốn sách về Machine Learning bằng tiếng Việt khá thú vị, các bạn có thể tham khảo bài Machine Learning là gì?.\n Những năm gần đây, khi mà khả năng tính toán của các máy tính được nâng lên một tầm cao mới và lượng dữ liệu khổng lồ được thu thập bởi các hãng công nghệ lớn, Machine Learning đã tiến thêm một bước dài và một lĩnh vực mới được ra đời gọi là Deep Learning (Học Sâu - thực sự tôi không muốn dịch từ này ra tiếng Việt). Deep Learning đã giúp máy tính thực thi những việc tưởng chừng như không thể vào 10 năm trước: phân loại cả ngàn vật thể khác nhau trong các bức ảnh, tự tạo chú thích cho ảnh, bắt chước giọng nói và chữ viết của con người, giao tiếp với con người, hay thậm chí cả sáng tác văn hay âm nhạc",
        rating : 3,
        quantity : 0,
        typeId : 1
      },
      { title : "Programming ASP.NET MVC 4",
        availability : "Còn sách",
        author : "Jess Chadwick, Todd Snyder, Hrusikesh Panda",
        content : "Get up and running with ASP.NET MVC 4, and learn how to build modern server-side web applications. This guide helps you understand how the framework performs, and shows you how to use various features to solve many real-world development scenarios you’re likely to face. In the process, you’ll learn how to work with HTML, JavaScript, the Entity Framework, and other web technologies. You’ll start by learning core concepts such as the Model-View-Controller architectural pattern, and then work your way toward advanced topics. The authors demonstrate ASP.NET MVC 4 best practices and techniques by building a sample online auction site (\"EBuy\") throughout the book.",
        rating : 3,
        quantity : 1,
        typeId : 1
      },
      { title : "Giáo Trình Thuật Toán (Introduction To Algorithms )",
        availability : "Còn sách",
        author : "Thomas H. Cormen, Charles E. Leiserson",
        content : "Có nhiều quyển sách thuật toán được trình bày chặt chẽ nhưng không đầy đủ về nội dung, trong khi nhiều quyển khác chứa đựng nhiều nội dung nhưng lại thiếu sự chặt chẽ toán học. Introduction to Algorithms là một quyển sách kết hợp cả tính chặt chẽ và tính toàn diện về nội dung. Quyển sách đề cập đến các thuật toán theo một diện rộng và sâu sắc, nhưng vẫn được trình bày sao cho mọi đối tượng độc giả đều có thể tiếp thu được. Mỗi chương là một đơn vị kiến thức độc lập và có thể làm thành một bài học giảng dạy. Các thuật toán được mô tả bằng tiếng Anh dưới dạng mã giả mà bất kỳ ai biết ít nhiều về lập trình cũng có thể hiểu được. Trong khi đó, phần diễn giải được trình bày một cách đơn giản nhất nhưng vẫn không thiếu chiều sâu và những chứng minh toán học chặt chẽ. Được sự quan tâm của rất nhiều lập trình viên và sinh viên các trường đại học trên khắp thế giới, ấn bản thứ hai (second edition) của Introduction to Algorithms đã thật sự tạo nên một hiện tượng trong lĩnh vực thuật toán. Với tính chất rõ ràng, toán học chặt chẽ, trong khi vẫn có thể tiếp cận được bởi những người không am hiểu toán học, quyển sách đã thiết lập nên một tiêu chuẩn cho sách giáo khoa; đồng thời là tài liệu tham khảo tốt nhất cho việc giải những bài toán tin học.",
        rating : 5,
        quantity : 2,
        typeId : 1
      },
      { title : "Đánh Thức Năng Lực Vô Hạn",
        availability : "Còn sách",
        author : "Anthony Robbins",
        content : "Khi thấy một ai đó thành đạt ta thường tự hỏi “làm thế nào để anh ta có được thành quả ấy?”, mặc dù xét về xuất phát điểm có thể họ không đủ tư chất bằng ta, thế nhưng sao họ lại sớm đạt được sự thành công như ý... Sự khác biệt này thường đơn giản là vì bạn luôn có những nỗi sợ hãi tiềm ẩn trong tư tưởng, nhận thức của mình - Nó được tích lũy và phát triển, đôi lúc lại dâng cao để tự bảo vệ, ngăn chặn những rủi ro có thể xảy đến, dần dần biến thành một lớp vỏ bọc - đó chính là trở lực của thành công. Vận dụng được nguồn năng lực vô hạn, không những loại bỏ được sự sợ hãi mà còn cho ta một thái độ sống tích cực, tự tin, dám nghĩ dám làm. Đó là nguồn nhiên liệu không bao giờ cạn kiệt đang chờ sự khởi động đúng lúc, nhịp nhàng để mọi người có thể đạt đến đỉnh điểm của thành công. Con người chỉ có thể chuyển đổi cuộc sống của mình một cách ngoạn mục, thần kỳ khi biết tìm cách khai thông, giải phóng nguồn năng lực tiềm ẩn đó. Nội dung sách sẽ là hồi chuông Đánh thức nguồn năng lực vô hạn trong mỗi chúng ta.",
        rating : 4,
        quantity : 2,
        typeId : 2
      },
      { title : "Kỹ Năng Đi Trước Đam Mê",
        availability : "Còn sách",
        author : "Cal Newports",
        content : "Trong quyển sách Kỹ Năng Đi Trước Đam Mê, Cal Newport lột trần niềm tin từ trước đến nay rằng ta nên \"theo đuổi đam mê.\" Niềm tin sáo rỗng này không những sai sót ở chỗ là những đam mê tồn tại sẵn có thường hiếm hoi và không liên quan gì lắm đến việc hầu hết mọi người cuối cùng cũng yêu thích công việc họ làm, mà nó còn có thể gây nguy hiểm, sinh ra cảm giác lo lắng và hiện tượng nhảy việc liên miên. Sau khi đưa ra dẫn chứng chống lại niềm tin vào đam mê, Newport bắt đầu cuộc hành trình khám phá thực tế là mọi người trở nên yêu thích công việc họ làm như thế nào. Dành thời gian tiếp xúc với những người nông dân trên trang trại, các nhà đầu tư mạo hiểm, những người viết kịch bản, các lập trình viên máy tính hành nghề tự do, và những người cho biết mình tìm thấy cảm giác mãn nguyện từ công việc, Newport phát hiện ra những chiến lược họ đã áp dụng và những cạm bẫy họ đã né tránh trong quá trình phát triển sự nghiệp hấp dẫn của mình. Anh tiết lộ rằng việc đi tìm một nghề nghiệp phù hợp với một đam mê tồn tại sẵn từ trước là không quan trọng. Đam mê đến sau khi bạn chăm chỉ làm việc để trở nên xuất sắc trong những việc có ích, chứ đam mê không đến trước. Nói cách khác, cách bạn làm việc thì quan trọng hơn nhiều so với công việc bạn làm.",
        rating : 3,
        quantity : 1,
        typeId : 2
      },
      { title : "Lập Trình Ngôn Ngữ Tư Duy",
        availability : "Còn sách",
        author : "Carolyn Boyes",
        content : "NLP ra đời vào những năm 1970, là kết quả của những công trình nghiên cứu tại Đại học California. Richard Bandler và John Grinder đưa ra mô hình về sự thành công của con người dựa trên những nghiên cứu của họ trong lĩnh vực ngôn ngữ và hành vi, sự kết nối giữa bộ óc và cơ thể. NLP là công cụ hữu ích giúp bạn cải thiện chất lượng công việc. Những lợi ích mà tôi và nhiều người khác nhận thấy là khả năng giao tiếp cùng kĩ năng làm việc theo nhóm tốt hơn, vượt qua khó khăn trong công việc dễ dàng hơn, hoàn thiện hơn các kĩ năng bán hàng, quản trị và lãnh đạo, cải thiện kĩ năng trình bày và tạo sức ảnh hưởng, khả năng đưa ra những mục tiêu rõ ràng hơn và để thực sự đạt lấy chúng.",
        rating : 4,
        quantity : 3,
        typeId : 1
      },
      { title : "Bản Thiết Kế Vĩ Đại",
        availability : "Hết sách",
        author : "Stephen Hawking",
        content : "Nội dung cuốn sách, như tác giả nói ngay từ dòng đầu tiên của chương một, là chuyện \"Bí ẩn của kiếp nhân sinh\", là những câu hỏi tối hậu về sự sống, vũ trụ và vạn vật: Tại sao phải có cái gì đó chứ không phải là hư không?, Tại sao chúng ta tồn tại? Tại sao là tập hợp các định luật vật lý cụ thể này chứ không phải các tập hợp khác? Đó là những câu hỏi đã từng và luôn luôn làm tất cả chúng ta xao xuyến, ở mức độ khác nhau, với cách tiếp cận khác nhau và trong mức độ hiểu biết khác nhau. Lời giải thì cũng có muôn vàn, từ các truyền thuyết, các câu chuyện cổ tích đến những luận lý đơn thuần dựa trên niềm tin và các lý thuyết khoa học được xây dựng một cách chặt chẽ. Trong cuốn sách này, Hawking điểm qua tất cả những chặng đường gian nan đó, để rồi cuối cùng đi đến một lý thuyết khả dĩ nhất, được xem là ứng viên duy nhất cho lý thuyết hoàn chỉnh về vũ trụ, lý thuyết- M: đấy chính là lý thuyết thống nhất mà Einstein đã hy vọng tìm được. Hawking cũng viết rằng: \"Thực tế là bản thân con người chúng ta- cũng đơn thuần là tập hợp các hạt cơ bản của tự nhiên- có khả năng đi gần đến hiểu biết về các định luật vũ trụ chi phối chúng ta và vũ trụ của chúng ta, đã là một thành công lớn\". Và tác giả tin rằng, chúng ta sẽ tìm ra bản thiết kế vĩ đại, đặt một dấu son cho cuộc tìm tòi cũng rất vĩ đại kéo dài từ hơn 3000 năm nay.",
        rating : 5,
        quantity : 0,
        typeId : 3
      },
      { title : "Bách Khoa Tri Thức Phổ Thông",
        availability : "Còn sách",
        author : "Lê Huy Hòa",
        content : "Nắm bắt được nguồn thông tin hoặc các đơn vị kiến thức trong cuộc sống hiện đại ngày càng là nhu cầu cần thiết, sở hữu và biết cách khai thác chúng lại là điều cần thiết hơn. Loại hình Bách Khoa Toàn Thư ra đời không ngoài mục đích đem đến sự tiện lợi và hữu ích cho nhiều đối tượng độc giả, giải quyết phần lớn nhu cầu tìm hiểu và sở hữu tri thức. Truyền thống thu thập và hệ thống hóa các đơn vị kiến thức thuộc nhiều lĩnh vực còn là sự ghi dấu tiến trình văn minh của loài người. Về Từ nguyên, Bách Khoa Toàn Thư -encyclopaedia - có xuất xứ từ tiếng Hy Lạp cổ, được ghép bởi từ enkyklos mang ý nghĩa là phổ thông hoặc các phương diện và từ paideia mang ý nghĩa giáo dục hoặc tri thức, từ ghép enkyklopaideia hàm ý giáo dục phổ thông hoặc giáo dục toàn diện hoặc hệ thống tri thức hoàn chỉnh. Với phương châm “khái quát, toàn diện, phổ thông”, hy vọng Bách khoa tri thức phổ thông sẽ đem đến cho bạn đọc những điều bổ ích trong cuộc sống thường ngày, sự hứng thú trong đời sống tinh thần và kích thích khả năng tìm hiểu sáng tạo.",
        rating : 2,
        quantity : 1,
        typeId : 3
      },
      { title : "201 Bài Toán Vui Luyện Trí Thông Minh",
        availability : "Hết sách",
        author : "Sa Thị Hồng Hạnh",
        content : "Sách tập hợp 201 bài toán vui luyện trí thông minh như: Ba chàng hoàng tử ở ba nước láng giềng muốn cầu hôn với công chúa. Vua cha đặt ra câu hỏi sau: \"Giỏ này đựng mận. Nếu ta cho hoàng tử thứ nhất một nửa số mận và thêm một quả, hoàng tử thứ hai một nửa số mận còn lại và thêm hai quả. Hoàng tử thứ ba một nửa số mận còn lại và thêm 3 quả, thì giỏ mận sẽ không còn quả nào\". Nếu ai tìm được lúc đầu trong giỏ có bao nhiêu quả mận thì sẽ được cưới công chúa. Mấy chàng hoàng tử nọ nghĩ mãi không ra, bạn hãy thử giải giúp họ?...",
        rating : 3,
        quantity : 0,
        typeId : 3
      },
      { title : "Dữ Liệu Lớn - Big Data",
        availability : "Còn sách",
        author : "Viktor Mayer-Schönberger, Kenneth Cukier",
        content : "Màu sơn nào có thể cho bạn biết một chiếc xe đã qua sử dụng vẫn còn trong tình trạng tốt? Làm thế nào các công chức ở thành phố New York có thể xác định các hố ga nguy hiểm nhất trước khi chúng phát nổ? Và làm thế nào những cuộc tìm kiếm của Google dự đoán được sự lây lan của dịch cúm H1N1? Chìa khóa để trả lời những câu hỏi này, và nhiều câu hỏi khác, là dữ liệu lớn. \"Dữ liệu lớn\" đề cập đến khả năng đang phát triển của chúng ta để nắm giữ các bộ sưu tập lớn thông tin, phân tích, và rút ra những kết luận đôi khi sâu sắc đáng ngạc nhiên. Lĩnh vực khoa học đang nổi lên này có thể chuyển vô số hiện tượng – từ giá vé máy bay đến các văn bản của hàng triệu cuốn sách – thành dạng có thể tìm kiếm được, và sử dụng sức mạnh tính toán ngày càng tăng của chúng ta để khám phá những điều chúng ta chưa bao giờ có thể nhìn thấy trước. Trong một cuộc cách mạng ngang tầm với Internet hoặc thậm chí in ấn, dữ liệu lớn sẽ thay đổi cách chúng ta nghĩ về kinh doanh, y tế, chính trị, giáo dục, và sự đổi mới trong những năm tới. Nó cũng đặt ra những mối đe dọa mới, từ sự kết thúc không thể tránh khỏi của sự riêng tư cho đến khả năng bị trừng phạt vì những thứ chúng ta thậm chí còn chưa làm, dựa trên khả năng của dữ liệu lớn có thể dự đoán được hành vi tương lai của chúng ta. Trong tác phẩm thông tuệ tuyệt vời và gây nhiều ngạc nhiên này, hai chuyên gia hàng đầu giải thích dữ liệu lớn là những gì, nó sẽ làm thay đổi cuộc sống của chúng ta như thế nào, và những gì chúng ta có thể làm để bảo vệ chính mình khỏi các mối nguy hiểm của nó. Dữ liệu lớn là cuốn sách lớn đầu tiên về điều to lớn sắp diễn ra.",
        rating : 4,
        quantity : 1,
        typeId : 3
      },
      { title : "5 Phương Trình Làm Thay Đổi Thế Giới",
        availability : "Còn sách",
        author : "Michael Guillen. Ph.D",
        content : "Michael Guillen là giảng viên vật lý và toán học, nhưng ông nổi tiếng hơn cả trong vai trò của một phóng viên, biên tập viên truyền hình với những phóng sự thực tế về thảm họa thiên nhiên. \"5 phương trình làm thay đổi thế giới\" được tuần báo Publisher's Weekly bình chọn là quyển sách hay nhất năm 1995 (trong số 21 quyển sách được chọn). Đó là 5 câu chuyện tuyệt vời trên con đường khoa học đi từ quả táo nổi tiếng đến quả bom nguyên tử... đầy tai tiếng. Albert Einstein và phương trình năng lượng, nhà khoa học người Thuỵ Sĩ Daniel Bernoulli và phương trình thuỷ động lực học, nhà vật lý người Anh Michael Faraday và phương trình điện từ trường, Isaac Newton và phương trình vạn vật hấp dẫn, nhà toán lý người Đức Rudolf Julius Emmanuel Clausius và phương trình nhiệt động lực học - 5 con người và 5 phương trình đã làm thay đổi thế giới!",
        rating : 4,
        quantity : 1,
        typeId : 3
      },
      { title : "Dữ Liệu Bí Quyết Thành Công Của Henry Ford",
        availability : "Hết sách",
        author : "Douglas Brinkley",
        content : "Nói đến lịch sử xe hơi là phải nói về Henry Ford – người sáng lập Công ty Ford Motor. Henry Ford được mệnh danh là “ông vua xe hơi” của nước Mỹ, ông không chỉ cách mạng ngành công nghiệp sản xuất ô tô ở Hoa Kỳ và châu Âu mà còn có nhiều ảnh hưởng tới kinh tế và xã hội thế kỷ XX: Sự phối hợp giữa sản xuất hàng loạt, tiền lương cao và giá thành sản phẩm thấp cho người tiêu dùng mà ông áp dụng đã được gọi là \"Chủ nghĩa Ford\".",
        rating : 4,
        quantity : 0,
        typeId : 4
      },
      { title : "Cà Phê Cùng Tony",
        availability : "Còn sách",
        author : "Tony Buổi Sáng",
        content : "Đọc truyện \"Cà phê cùng Tony\" là sự tập hợp các bài viết trên trang mạng xã hội của tác giảTony Buổi Sáng(TnBS) về những bài học, câu chuyện anh đã trải nghiệm trong cuộc sống. Đó có thể là cách anh chia sẻ với các bạn trẻ về những chuyện to tát như khởi nghiệp, đạo đức kinh doanh, học tập đến những việc nhỏ nhặt như ăn mặc, giao tiếp, vệ sinh cơ thể… sao cho văn minh, lịch sự. Hay chỉ đơn giản thuật lại những trải nghiệm thực tế của anh trong quá trình sống, kinh doanh ở trong và ngoài nước. Xuyên suốt cuốn sách, các câu chuyện được kể với giọng điệu trào phúng, hài hước lại được thể hiện bằng ngôn ngữ “cư dân mạng” tạo sự gần gũi để các bạn trẻ có thể dễ dàng tiếp nhận. Mặc dù tác giả luôn khẳng định những thông tin, chi tiết trong câu chuyện là hư cấu và thậm xưng nhưng điều đó không có nghĩa làm cuốn sách bớt đi sự thú vị. Chia sẻ về sự ra đời của cuốn sách, tác giả tâm niệm không muốn những điều anh tâm đắc và đúc kết chỉ dừng lại ở mạng xã hội. Anh hi vọng những câu chuyện của mình thông qua”Cà phê cùng Tony”có thể thổi nguồn cảm hứng tới những độc giả không có điều kiện sử dụng internet, đồng thời khuyến khích văn hóa đọc ở các bạn trẻ trong thời đại mà văn hóa nghe nhìn đang dần chiếm ưu thế. Đơn giản và không cầu kì, đọc \"Cà phê cùng Tony\", độc giả sẽ cảm thấy như đang khám phá câu chuyện của chính mình qua cách kể của một người khác. Đọc \"Cà phê cùng Tony\", độc giả không thể cười lớn như khi đọc những mẩu chuyện cười, họ chỉ có thể tủm tỉm với những triết lí dí dỏm mà TnBS mang đến.",
        rating : 4,
        quantity : 1,
        typeId : 4
      },
      { title : "Bản lĩnh Putin",
        availability : "Hết sách",
        author : "Dương Minh Hào",
        content : "Ngày 31 tháng 12 năm 1999, Yeltsin đã giao lại nước Nga cho Putin trong tình trạng khó khăn chưa từng thấy trong gần một trăm năm qua. Trước lúc trao quyền, ông đã dặn dò lại Putin: \"Phải làm tốt cho đất nước Nga\". Putin đã không phụ sự ủy nhiệm trọng trách của Yeltsin. Putin đã đưa đất nước Nga vào thế kỷ 21 với diện mạo hoàn toàn mới, vì vậy cho nên, có người gọi ông là \"sự khởi sắc của Putin\". Trong lịch sử Nga đã từng xuất hiện rất nhiều nhân vật vĩ đại, và cũng đã từng ghi nhận rất nhiều sự kiện lịch sử vĩ đại của thế giới. Mười năm cuối cùng của thế kỷ 20, những diễn biến đầy kịch tính về xã hội Nga một lần nữa lại thu hút sự quan tâm của toàn thế giới. Nước Nga đã kết thúc thời đại Yeltsin kéo dài 10 năm và bắt đầu mở ra một thời đại Putin mới tràn đầy hứa hẹn. Một khi nước Nga có thể lấy lại vị thế oai hùng thì Putin cũng sẽ giống như Pie Đại Đế hay Catherinne II lưu danh trong sử sách.",
        rating : 4,
        quantity : 0,
        typeId : 4
      },
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
    return queryInterface.bulkInsert('Books', data, {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Books', null, {});
  }
};
