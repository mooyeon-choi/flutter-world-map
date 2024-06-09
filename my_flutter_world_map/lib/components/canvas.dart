import 'dart:ui' as ui;

import 'package:flutter/material.dart';

//Copy this CustomPainter code to the Bottom of the File
class RPSCustomPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    Path path_0 = Path();
    path_0.moveTo(7.68748, 14.3585);
    path_0.cubicTo(8.11332, 14.6109, 13.5685, 15.2288, 15.6302, 15.3301);
    path_0.lineTo(16.7873, 12.4359);
    path_0.lineTo(18.9576, 9.68704);
    path_0.lineTo(18.9576, 7.08346);
    path_0.lineTo(20.2616, 7.08346);
    path_0.lineTo(21.4554, 6.40541);
    path_0.cubicTo(20.9518, 4.29055, 20.8754, 2.16249, 20.5127, 2.13167);
    path_0.cubicTo(19.9048, 2.08177, 17.4114, 4.7734, 16.3938, 6.75324);
    path_0.cubicTo(15.3776, 8.73161, 12.4334, 10.255, 9.88865, 9.79858);
    path_0.cubicTo(7.34827, 9.34214, 6.48484, 10.4091, 5.82258, 10.8655);
    path_0.cubicTo(5.65224, 10.9844, 5.38499, 10.8905, 5.09424, 10.6674);
    path_0.cubicTo(5.36296, 12.6649, 7.291, 14.1193, 7.68748, 14.3585);
    path_0.close();

    Paint paint_0_fill = Paint()..style = PaintingStyle.fill;
    paint_0_fill.color = Colors.white.withOpacity(1.0);
    canvas.drawPath(path_0, paint_0_fill);

    Path path_1 = Path();
    path_1.moveTo(7.68748, 14.3585);
    path_1.cubicTo(8.11332, 14.6109, 13.5685, 15.2288, 15.6302, 15.3301);
    path_1.lineTo(16.7873, 12.4359);
    path_1.lineTo(18.9576, 9.68704);
    path_1.lineTo(18.9576, 7.08346);
    path_1.lineTo(20.2616, 7.08346);
    path_1.lineTo(21.4554, 6.40541);
    path_1.cubicTo(20.9518, 4.29055, 20.8754, 2.16249, 20.5127, 2.13167);
    path_1.cubicTo(19.9048, 2.08177, 17.4114, 4.7734, 16.3938, 6.75324);
    path_1.cubicTo(15.3776, 8.73161, 12.4334, 10.255, 9.88865, 9.79858);
    path_1.cubicTo(7.34827, 9.34214, 6.48484, 10.4091, 5.82258, 10.8655);
    path_1.cubicTo(5.65224, 10.9844, 5.38499, 10.8905, 5.09424, 10.6674);
    path_1.cubicTo(5.36296, 12.6649, 7.291, 14.1193, 7.68748, 14.3585);
    path_1.close();

    Paint paint_1_stroke = Paint()
      ..style = PaintingStyle.stroke
      ..strokeWidth = size.width * 0.009615385;
    paint_1_stroke.color = Color(0xff868686).withOpacity(1.0);
    canvas.drawPath(path_1, paint_1_stroke);

    Paint paint_1_fill = Paint()..style = PaintingStyle.fill;
    paint_1_fill.color = Color(0xff000000).withOpacity(1.0);
    canvas.drawPath(path_1, paint_1_fill);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) {
    return true;
  }
}
