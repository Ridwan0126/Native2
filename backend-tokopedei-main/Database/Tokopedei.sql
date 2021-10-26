/*
SQLyog Ultimate v13.1.1 (64 bit)
MySQL - 5.5.60-log : Database - db_tokopedei
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_tokopedei` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_tokopedei`;

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `diskon` bigint(20) DEFAULT NULL,
  `harga_beli` bigint(20) DEFAULT NULL,
  `harga_jual` bigint(20) DEFAULT NULL,
  `name_product` varchar(255) DEFAULT NULL,
  `qty` bigint(20) DEFAULT NULL,
  `thumbnailurl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

/*Data for the table `product` */

insert  into `product`(`id`,`diskon`,`harga_beli`,`harga_jual`,`name_product`,`qty`,`thumbnailurl`) values 
(1,0,25000,26000,'Telur Ayam',25,'https://res.cloudinary.com/dk0z4ums3/image/upload/v1592885787/attached_image/inilah-manfaat-telur-dan-cara-menyimpannya.jpg'),
(2,10,10000,12000,'Minyak',10,'https://statik.tempo.co/data/2016/11/22/id_558209/558209_620.jpg'),
(3,0,12000,15000,'Gula',12,'https://id-test-11.slatic.net/p/8820fda555045c34ed3b4dca96e1cd6c.jpg'),
(4,0,12000,15000,'Beras',25,'https://cdn.supermarket.co.id/wp-content/uploads/2020/07/1_A7292480001001_20191223140636165-1.png'),
(5,0,25000,27000,'Daging Ayam',50,'https://id-test-11.slatic.net/p/9510024adbbfc697d07ef12f03e4fe80.jpg'),
(6,0,75000,80000,'Daging Sapi',50,'https://asset.kompas.com/crops/o6zdc0_3Z-kxUrW8nYaKeglbojo=/0x28:1000x695/750x500/data/photo/2021/07/14/60ee4d217d0f3.jpg'),
(7,10,12000,15000,'Ikan',25,'https://awsimages.detik.net.id/community/media/visual/2021/04/09/fakta-ikan-nila-2_169.jpeg?w=700&q=90'),
(8,5,8500,10000,'Kopi',32,'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-3723340/kopi-kampung-lampung_kopi-bubuk-kapal-lampung-netto-1-kg-_full01.jpg');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`email`,`fullname`,`password`,`username`) values 
(1,'yantoweb@mail.com','Yanto','12345','yanto web'),
(8,'hary_rosadi@mail.com','Hary','12345','Rosadi'),
(11,'admin@tokopedei.com','Admin Tokopedei','12345','admin');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
