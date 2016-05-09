<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wp_weeklies');

/** MySQL database username */
define('DB_USER', 'bdn');

/** MySQL database password */
define('DB_PASSWORD', '491bang0r');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3F1:a<_4`<Y@qG^%R#4`=0R4`QDj>ZRP(O~EjAprhfiUl.3xhlqV=yYg&;@kiN;n');
define('SECURE_AUTH_KEY',  '%e.d,)ghvHrHys;D,6%WiZyfNCD7JUMhk!y_g}5L]Zb>RRjPWpD5QIz{aDDk,(IF');
define('LOGGED_IN_KEY',    'LV,g4N?pB~A; K?oD) VG7%@HkG{5R:?92*^@N1U;nl].LCus,Ah#;ANUAn1<r w');
define('NONCE_KEY',        'H]5Z3.1E*m]k_lvV0i-ev3LM9JBo139jQI`x.QY@,sYf(H}^xN/bKR@]W5bf:rVt');
define('AUTH_SALT',        '>?wqG?.DJ$Ezbd_pebV{D=>3MEDX@LrlbOXDh+JS2uhI11aM9i5eFx*pO3M@~fg/');
define('SECURE_AUTH_SALT', '+t>m7Fi*8meYByuN)9LCNx{2g,aLgXoE^79@Illa8Ht8mXJ,oQ`4=?Ov<vf+q/0G');
define('LOGGED_IN_SALT',   'R)A,u$@+pX>Hy3dIHFz@3LmcF@>n%+[%Th+TO5h9HmR*i$K.{zJWw6*zwW;UY/sa');
define('NONCE_SALT',       'B^[&Cq8<[)_Ja*1HB0]}L~yj{Wany)_IY &zTi]S=D*+%>@Qn#`Exv`Uv e`#lEi');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'weekly_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG',true);

define( 'WP_ALLOW_MULTISITE', true );
define( 'MULTISITE', true );
define( 'SUBDOMAIN_INSTALL', false );
$base = '/';
define( 'DOMAIN_CURRENT_SITE', 'weeklies.com' );
define( 'PATH_CURRENT_SITE', '/' );
define( 'SITE_ID_CURRENT_SITE', 1 );
define( 'BLOG_ID_CURRENT_SITE', 1 );/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

