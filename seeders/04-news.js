'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    let data = [
      { title : "Sách mới",
        content : "Một cuốn sách bổ ích cho các bạn đang theo học môn kĩ thuật lập trình. Đã được thêm vào tủ sách của thư viện",
        imgPath : "/images/news.jpg"
      },
      { title : "Cập nhật phiên bản",
        content : "The algorithm design nay đã có phiên bản 7 đã được thêm vào tủ sách của thư viện",
        imgPath : "/images/news.jpg"
      },
      { title : "Thông báo",
        content : "Thư viện sẽ đóng cửa nghỉ tết từ ngày 20/1 và mở cửa lại vào 10/2",
        imgPath : "/images/close.jpg"
      },
      { title : "Sách mới",
        content : "Một cuốn sách bổ ích cho các bạn đang theo học môn kĩ thuật lập trình. Đã được thêm vào tủ sách của thư viện",
        imgPath : "/images/news.jpg"
      },
      { title : "Cập nhật phiên bản",
        content : "The algorithm design nay đã có phiên bản 7 đã được thêm vào tủ sách của thư viện",
        imgPath : "/images/news.jpg"
      },
      { title : "Thông báo",
        content : "Thư viện sẽ đóng cửa nghỉ tết từ ngày 20/1 và mở cửa lại vào 10/2",
        imgPath : "/images/close.jpg"
      }
    ];
    data.map(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
      return item;
    });
      return queryInterface.bulkInsert('News', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('News', null, {});
  }
};
