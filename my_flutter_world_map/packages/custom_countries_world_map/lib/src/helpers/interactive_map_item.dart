import 'package:custom_countries_world_map/custom_countries_world_map.dart';
import 'package:flutter/cupertino.dart';

import 'map_instructions.dart';
import 'package:flutter/material.dart';

class InteractiveMapItem extends StatefulWidget {
  const InteractiveMapItem({
    Key? key,
    this.defaultColor,
    this.color,
    this.onHover,
    this.callback,
    required this.countryPathList,
    this.countryBorder,
    required this.i,
  }) : super(key: key);

  final void Function(String id, String name, bool isHovering)? onHover;

  /// Triggered when a country is tapped.
  /// The first parameter is the isoCode of the country that was tapped.
  /// The second parameter is the TapUpDetails of the tap.
  final void Function(String id, String name, TapUpDetails tapDetails)?
      callback;

  final Color? defaultColor;
  final Color? color;
  final List<SimpleMapInstruction> countryPathList;
  final CountryBorder? countryBorder;
  final int i;

  @override
  State<InteractiveMapItem> createState() => _InteractiveMapItemState();
}

class _InteractiveMapItemState extends State<InteractiveMapItem> {
  @override
  Widget build(BuildContext context) {
    return Stack(
      fit: StackFit.expand,
      children: [
        ClipPath(
            clipper:
                _BuildClipper(widget.countryPathList[widget.i].instructions),
            child: AnimatedContainer(
              clipBehavior: Clip.hardEdge,
              duration: Duration(milliseconds: 200),
              color: widget.color ?? widget.defaultColor ?? Colors.grey,
              child: InkWell(
                splashColor: Colors.transparent,
                focusColor: Colors.transparent,
                hoverColor: Colors.transparent,
                highlightColor: Colors.transparent,
                onHover: (value) {
                  if (widget.onHover != null) {
                    widget.onHover!(widget.countryPathList[widget.i].uniqueID,
                        widget.countryPathList[widget.i].name, value);
                  }
                },
                onTapUp: (details) {
                  if (widget.callback != null) {
                    widget.callback!(widget.countryPathList[widget.i].uniqueID,
                        widget.countryPathList[widget.i].name, details);
                  }
                },
                child:
                    SizedBox(width: double.infinity, height: double.infinity),
              ),
            )),
        IgnorePointer(
          child: CustomPaint(
            painter: _BorderPainter(
                color: widget.countryBorder?.color ?? Colors.black,
                width: widget.countryBorder?.width ?? 1.0,
                instructions: widget.countryPathList[widget.i].instructions),
          ),
        ),
      ],
    );
  }
}

class _BuildClipper extends CustomClipper<Path> {
  final List<String> instructions;

  _BuildClipper(this.instructions);

  @override
  Path getClip(Size size) {
    Path path = Path();

    // Read path instructions and start drawing

    // Read path instructions and start drawing
    for (int j = 0; j < instructions.length; j++) {
      String instruction = instructions[j];
      if (instruction == "c") {
        path.close();
      } else {
        List<String> coordinates = instruction.substring(1).split(',');
        double x = double.parse(coordinates[0]);
        double y = double.parse(coordinates[1]);

        if (instruction[0] == 'm') path.moveTo(size.width * x, size.height * y);
        if (instruction[0] == 'l') path.lineTo(size.width * x, size.height * y);
      }
    }

    return path;
  }

  @override
  bool shouldReclip(CustomClipper<Path> oldClipper) {
    return true;
  }
}

class _BorderPainter extends CustomPainter {
  final Color color;
  final double width;
  final List<String> instructions;

  _BorderPainter(
      {required this.color, required this.width, required this.instructions});

  @override
  void paint(Canvas canvas, Size size) {
    Path path = Path();

    // Read path instructions and start drawing

    // Read path instructions and start drawing
    for (int j = 0; j < instructions.length; j++) {
      String instruction = instructions[j];
      if (instruction == "c") {
        path.close();
      } else {
        List<String> coordinates = instruction.substring(1).split(',');
        double x = double.parse(coordinates[0]);
        double y = double.parse(coordinates[1]);

        if (instruction[0] == 'm') path.moveTo(size.width * x, size.height * y);
        if (instruction[0] == 'l') path.lineTo(size.width * x, size.height * y);
      }
    }

    final paint = Paint()
      ..color = color
      ..strokeWidth = width
      ..style = PaintingStyle.stroke;

    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
